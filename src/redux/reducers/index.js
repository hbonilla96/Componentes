import { combineReducers } from 'redux'

// Reducers
import loginReducer from '@/redux/reducers/Login';
import signUpReducer from '@/redux/reducers/SignUp';
import createBoardReducer from '@/redux/reducers/Boards/CreateBoard';
import listBoardsReducer from '@/redux/reducers/Boards';
import pinsReducer from '@/redux/reducers/Pins/SavePinToBoard';

export default combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  pins: pinsReducer,
  createBoard: createBoardReducer,
  boards: listBoardsReducer,
})