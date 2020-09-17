import React, { useContext, useEffect, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const DisplayAllPokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  useEffect(() => {
    pokemonContext.getAllPokemon();
    console.log("use effect loaded");
  }, []);
  //console.log(pokemonContext.allPokemon);
  return (
    <div>
      <p>Getting all pokemon!</p>
    </div>
  );
};

export default DisplayAllPokemon;
