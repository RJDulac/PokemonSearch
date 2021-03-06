import React, { useState, useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const SearchPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    if (pokemonContext.pokemon.length !== 0) {
      pokemonContext.displayContent(true);
    }
  }, []);

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      //add alert later
    } else {
      pokemonContext.searchPokemon(text.toLowerCase());
      console.log(pokemonContext.pokemon);
      setText("");
    }
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="Search Pokemon..."
        ></input>
      </form>
    </div>
  );
};
export default SearchPokemon;
