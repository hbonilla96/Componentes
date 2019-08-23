import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
} from "@/redux/Actions/types";

const INITIAL_STATE = {
  board: [],
  isLoading: false,
  error: "",
};

function pinsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_BOARD_REQUEST:
      return {
        ...state,
        isloading: true,
        error: false,
      };
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        board: [...state.board, action.payload],
        error: false,
        isLoading: false
      };
    case CREATE_BOARD_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}

export default pinsReducer;