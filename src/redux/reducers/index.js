import { combineReducers } from 'redux'

// Reducers

import loginReducer from '@/redux/reducers/Login';

export default combineReducers({
  login: loginReducer,
})