import {
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
} from '../../Actions/types';


export default function userLogin(userParams) {

  return async dispatch => {
    dispatch({
      type: USERS_LOGIN_REQUEST
    })

    // try {
    //   axios.post(url, userParams)
    //     .then((val) => {
    //       dispatch({
    //         type: USERS_LOGIN_SUCCESS,
    //         payload: val.data
    //       })
    //     }).catch((err) => {
    //       dispatch({
    //         type: USERS_LOGIN_FAILURE,
    //         error: err
    //       })
    //     })
    // } catch (err) {
    //   dispatch({
    //     type: USERS_LOGIN_FAILURE,
    //     error: err
    //   })
    // }
  }
}