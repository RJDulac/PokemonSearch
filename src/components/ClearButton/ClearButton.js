import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const ClearButton = () => {
  const pokemonContext = useContext(PokemonContext);

  const onClick = () => {
    pokemonContext.clearPokemon();
  };

  return <button onClick={onClick}>Clear Pokemon</button>;
};

export default ClearButton;
