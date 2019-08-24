import Axios from 'axios';
import {
  SAVE_PIN_REQUEST,
  SAVE_PIN_SUCCESS,
  SAVE_PIN_FAILURE,
} from '@/redux/Actions/types';

const URL = 'http://localhost:3377/pin';

const user = JSON.parse(localStorage.getItem('me'));

const config = {
  headers: {
    'authorization': `Bearer ${user.token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

function savePinToBoard(imageParams) {
  const data = {
    name: "",
    description: "",
    urlImage: imageParams.download_url,
    urlSite: imageParams.url,
    idBoard: imageParams.board.id
  }

  console.log('PARAMS IN SAVE PIN', data);

  return async dispatch => {
    dispatch({
      type: SAVE_PIN_REQUEST
    })

    try {

      Axios.post(URL, data, config)
        .then(response => {
          console.log('CREATE BOARD!', response);
          dispatch({
            type: SAVE_PIN_SUCCESS,
            payload: response.data
          })
        })
        .catch(error => {
          dispatch({
            type: SAVE_PIN_FAILURE,
            error: error
          })
        });
    } catch (err) {
      dispatch({
        type: SAVE_PIN_FAILURE,
        error: err
      })
    }
  }
}

export default savePinToBoard;