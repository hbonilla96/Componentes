import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from '@/redux/Actions/types';


function createBoard(boardParams) {
  console.log('boardParams', boardParams);
  return async dispatch => {
    dispatch({
      type: CREATE_BOARD_REQUEST
    })

    try {
      dispatch({
        type: CREATE_BOARD_SUCCESS,
        payload: boardParams,
      })
    } catch (err) {
      dispatch({
        type: CREATE_BOARD_FAILURE,
        error: err
      })
    }
  }
}

export default createBoard;