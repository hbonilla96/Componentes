import {
  LIST_USER_BOARDS_REQUEST,
  LIST_USER_BOARDS_SUCCESS,
  LIST_USER_BOARDS_FAILURE,
} from '@/redux/Actions/types';


function addBoards(boards) {
  console.log('boardParams', boards);
  return async dispatch => {
    dispatch({
      type: LIST_USER_BOARDS_REQUEST
    })

    try {
      dispatch({
        type: LIST_USER_BOARDS_SUCCESS,
        payload: boards,
      })
    } catch (err) {
      dispatch({
        type: LIST_USER_BOARDS_FAILURE,
        error: err
      })
    }
  }
}

export default addBoards;