import { USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILURE } from "@/redux/Actions/types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: "",
  login: [],
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case USERS_LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        error: false,
        isLoading: false
      };
    case USERS_LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}

export default loginReducer;