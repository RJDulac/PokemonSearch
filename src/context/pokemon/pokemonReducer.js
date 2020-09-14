import {
  SEARCH_POKEMON,
  SET_LOADING,
  CLEAR_POKEMON,
  GET_POKEMON,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
