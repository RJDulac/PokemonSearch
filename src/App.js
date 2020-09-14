import React, { useState, useEffect } from "react";
import PokemonState from "./context/pokemon/PokemonState";
import SearchPokemon from "./SearchPokemon";
import "./App.css";

const App = () => {
  return (
    <PokemonState>
      <div className="App">
        <SearchPokemon></SearchPokemon>
      </div>
    </PokemonState>
  );
};

export default App;
