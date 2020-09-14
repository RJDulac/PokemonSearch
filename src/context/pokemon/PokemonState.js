import React, { useReducer } from "react";
import axios from "axios";
import PokemonContext from "./pokemonContext";
import PokemonReducer from "./pokemonReducer";
import {
  SEARCH_POKEMON,
  SET_LOADING,
  CLEAR_POKEMON,
  GET_POKEMON,
} from "../types";

const PokemonState = (props) => {
  const intialState = {
    pokemon: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(PokemonReducer, intialState);

  //search pokemon
  const searchPokemon = async (text) => {
    setLoading();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
    dispatch({
      type: SEARCH_POKEMON,
      payload: res.data,
    });
  };
  //get pokemon
  //clear pokemon
  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemon: state.pokemon,
        loading: state.loading,
        searchPokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
export default PokemonState;
