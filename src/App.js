import React, { useContext } from "react";

import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import ClearButton from "./components/ClearButton/ClearButton";
import PokemonContext from "./context/pokemon/pokemonContext";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import ExamplePokemon from "./components/ExamplePokemon/ExamplePokemon";
import loader from "./images/loading.svg"; //turn into a component later

import "./App.css";

const App = () => {
  const pokemonContext = useContext(PokemonContext);
  const { loading, display } = pokemonContext;

  const card = loading ? (
    <img src={loader} className="spinner" />
  ) : (
    <PokemonCard />
  );
  return (
    <div>
      <ExamplePokemon />
      <div className="input">
        <SearchPokemon />
        <ClearButton />
      </div>
      {display ? card : <div></div>}
    </div>
  );
};

export default App;
