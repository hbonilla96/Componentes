import {
  SAVE_PIN_REQUEST,
  SAVE_PIN_SUCCESS,
  SAVE_PIN_FAILURE,
} from "@/redux/Actions/types";

const INITIAL_STATE = {
  board: [],
  isLoading: false,
  error: "",
  pins: [],
};

function savePinToBoardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_PIN_REQUEST:
      return {
        ...state,
        isloading: true,
        error: false,
      };
    case SAVE_PIN_SUCCESS:
      return {
        ...state,
        pins: action.payload,
        error: false,
        isLoading: false
      };
    case SAVE_PIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}

export default savePinToBoardReducer;