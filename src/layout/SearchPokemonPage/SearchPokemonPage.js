import React from "react";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";
import ClearButton from "../../components/ClearButton/ClearButton";

const SearchPokemonPage = () => {
  return (
    <div className="input">
      <SearchPokemon />
      <ClearButton />
    </div>
  );
};

export default SearchPokemonPage;
