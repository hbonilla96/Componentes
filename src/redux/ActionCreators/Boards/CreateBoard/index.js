import Axios from 'axios';
import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from '@/redux/Actions/types';

const URL = 'http://localhost:3377/board';

const user = JSON.parse(localStorage.getItem('me'));

const config = {
  headers: {
    'authorization': `Bearer ${user.token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

function createBoard(boardParams) {
  const data = {
    userName: user.email,
    ...boardParams,
  }
  console.log('boardParams', boardParams);
  return async dispatch => {
    dispatch({
      type: CREATE_BOARD_REQUEST
    })

    try {
      Axios.post(URL, data, config)
        .then(response => {
          console.log('CREATE BOARD!', response);
          dispatch({
            type: CREATE_BOARD_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({
            type: CREATE_BOARD_FAILURE,
            error: error
          })
        });
    } catch (err) {
      dispatch({
        type: CREATE_BOARD_FAILURE,
        error: err
      })
    }
  }
}

export default createBoard;