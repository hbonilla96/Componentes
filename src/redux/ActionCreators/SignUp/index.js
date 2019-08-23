import {
  USERS_SIGN_UP_REQUEST,
  USERS_SIGN_UP_SUCCESS,
  USERS_SIGN_UP_FAILURE,
} from '../../Actions/types';


export default function userSignUp(userCreateParams) {
  return async dispatch => {
    dispatch({
      type: USERS_SIGN_UP_REQUEST
    })
    try {
      dispatch({
        type: USERS_SIGN_UP_SUCCESS,
        payload: userCreateParams
      })
      // axios.post(url, userParams)
      //   .then((val) => {
      //     dispatch({
      //       type: USERS_LOGIN_SUCCESS,
      //       payload: val.data
      //     })
      //   }).catch((err) => {
      //     dispatch({
      //       type: USERS_LOGIN_FAILURE,
      //       error: err
      //     })
      //   })
    } catch (err) {
      dispatch({
        type: USERS_SIGN_UP_FAILURE,
        error: err
      })
    }
  }
}