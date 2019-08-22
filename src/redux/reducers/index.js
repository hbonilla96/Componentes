import { combineReducers } from 'redux'

// Reducers
import loginReducer from '@/redux/reducers/Login';
import savePinToBoardReducer from '@/redux/reducers/SavePinToBoard';

export default combineReducers({
  login: loginReducer,
  savePinToBoard: savePinToBoardReducer,
})