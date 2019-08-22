import {
  SAVE_PIN_REQUEST,
  SAVE_PIN_SUCCESS,
  SAVE_PIN_FAILURE,
} from '@/redux/Actions/types';


function savePinToBoard(imageParams) {

  return async dispatch => {
    dispatch({
      type: SAVE_PIN_REQUEST
    })

    try {
      dispatch({
        type: SAVE_PIN_SUCCESS,
        payload: imageParams,
      })
    } catch (err) {
      dispatch({
        type: SAVE_PIN_FAILURE,
        error: err
      })
    }
  }
}

export default savePinToBoard;