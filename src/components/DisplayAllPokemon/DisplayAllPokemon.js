import React, { useContext, useEffect, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const DisplayAllPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    if (pokemonContext.allPokemon.length <= 0) {
      pokemonContext.getAllPokemon();
    }
  }, []);
  //console.log(pokemonContext.allPokemon);
  return (
    <div>
      <p>Getting all pokemon!</p>
    </div>
  );
};

export default DisplayAllPokemon;
