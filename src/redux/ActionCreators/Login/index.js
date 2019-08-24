import Axios from 'axios';
import {
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
} from '../../Actions/types';

const URL = 'http://localhost:3377/auth/signin';

// const config = {
//   headers: { Authorization: "bearer " + TOKEN }
// };

export default function userLogin(userParams) {
  const bodyParameters = {
    ...userParams
  };
  return async dispatch => {
    dispatch({
      type: USERS_LOGIN_REQUEST
    })
    try {
      Axios.post(URL, bodyParameters)
        .then(response => {
          console.log(response);
          localStorage.setItem('me', JSON.stringify(response.data));
          dispatch({
            type: USERS_LOGIN_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({
            type: USERS_LOGIN_FAILURE,
            error: error
          })
        });
    } catch (err) {
      dispatch({
        type: USERS_LOGIN_FAILURE,
        error: err
      })
    }
  }
}