import React, { useState, useContext, useEffect } from "react";
import PokemonContext from "./context/pokemon/pokemonContext";

const SearchPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    //console.log(pokemonContext);
  }, []); //empty brakets prevents it from running again after updating state

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
        <input value={text} onChange={onChange}></input>
      </form>
      {!pokemonContext.loading && (
        <div>
          {/* use css text-transform: capitalize instead */}
          <p>
            {pokemonContext.pokemon.species.name.charAt(0).toUpperCase() +
              pokemonContext.pokemon.species.name.slice(1)}
          </p>
          <p>Offical artwork</p>
          <img
            src={pokemonContext.pokemon.sprites.other.dream_world.front_default}
            alt={text}
          />
          <p>Normal</p>
          <img src={pokemonContext.pokemon.sprites.front_default} alt={text} />
          <p>Shiny</p>
          <img src={pokemonContext.pokemon.sprites.front_shiny} alt={text} />
          <p>Abilities</p>
          {pokemonContext.pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
          {pokemonContext.pokemon.moves.map((moves) => {
            {
              /* truncate move list name and add a show more button */
            }
            return console.log(moves.move.name);
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;
