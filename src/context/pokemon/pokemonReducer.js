import {
  SEARCH_POKEMON,
  SET_LOADING,
  CLEAR_POKEMON,
  GET_ALL_POKEMON,
  DISPLAY_CONTENT,
  EXAMPLE_POKEMON,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DISPLAY_CONTENT:
      return {
        ...state,
        display: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        display: true,
      };
    case CLEAR_POKEMON:
      return {
        ...state,
        pokemon: [],
        loading: true,
        display: false,
      };
    case EXAMPLE_POKEMON:
      console.log("Example Pokemon requested", action.payload);
      return {
        ...state,
        examplePokemon: action.payload,
        loading: true,
      };
    case GET_ALL_POKEMON:
      console.log("Get all pokemon requested", action.payload);
      return {
        ...state,
        allPokemon: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
