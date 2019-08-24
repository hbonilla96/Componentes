import {
  LIST_USER_BOARDS_REQUEST,
  LIST_USER_BOARDS_SUCCESS,
  LIST_USER_BOARDS_FAILURE,
} from "@/redux/Actions/types";

const INITIAL_STATE = {
  board: [],
  isLoading: false,
  error: "",
};

function listBoardsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_USER_BOARDS_REQUEST:
      return {
        ...state,
        isloading: true,
        error: false,
      };
    case LIST_USER_BOARDS_SUCCESS:
      return {
        ...state,
        board: [...state.board, ...action.payload],
        error: false,
        isLoading: false
      };
    case LIST_USER_BOARDS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}

export default listBoardsReducer;