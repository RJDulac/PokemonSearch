import React, { useReducer } from "react";
import axios from "axios";
import PokemonContext from "./pokemonContext";
import PokemonReducer from "./pokemonReducer";
import {
  SEARCH_POKEMON,
  SET_LOADING,
  CLEAR_POKEMON,
  GET_ALL_POKEMON,
  EXAMPLE_POKEMON,
  DISPLAY_CONTENT,
} from "../types";

const PokemonState = (props) => {
  const intialState = {
    pokemon: [],
    examplePokemon: [],
    loading: true,
    display: false,
  };
  const [state, dispatch] = useReducer(PokemonReducer, intialState);

  //search pokemon
  const searchPokemon = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
    dispatch({
      type: SEARCH_POKEMON,
      payload: res.data,
    });
    setLoading(false);
  };
  //get all pokemon
  const getExamplePokemon = async () => {
    setLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    dispatch({
      type: EXAMPLE_POKEMON,
      payload: res.data.results,
    });
  };
  //clear pokemon
  const clearPokemon = () => {
    dispatch({
      type: CLEAR_POKEMON,
    });
  };
  //set loading
  const setLoading = (loading) =>
    dispatch({ type: SET_LOADING, payload: loading });

  const displayContent = (display) =>
    dispatch({ type: DISPLAY_CONTENT, payload: display });
  return (
    <PokemonContext.Provider
      value={{
        examplePokemon: state.examplePokemon,
        pokemon: state.pokemon,
        loading: state.loading,
        display: state.display,
        searchPokemon,
        clearPokemon,
        getExamplePokemon,
        setLoading,
        displayContent,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
export default PokemonState;
