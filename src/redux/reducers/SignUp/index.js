import {
  USERS_SIGN_UP_REQUEST,
  USERS_SIGN_UP_SUCCESS,
  USERS_SIGN_UP_FAILURE,
} from "@/redux/Actions/types";

const INITIAL_STATE = {
  user: [],
  isLoading: false,
  error: "",
  signUp: [],
};

function signUpReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case USERS_SIGN_UP_SUCCESS:
      return {
        ...state,
        login: action.payload,
        error: false,
        isLoading: false
      };
    case USERS_SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}

export default signUpReducer;