import { combineReducers } from 'redux'

// Reducers
import loginReducer from '@/redux/reducers/Login';
import signUpReducer from '@/redux/reducers/SignUp';
import savePinToBoardReducer from '@/redux/reducers/SavePinToBoard';

export default combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  savePinToBoard: savePinToBoardReducer,
})