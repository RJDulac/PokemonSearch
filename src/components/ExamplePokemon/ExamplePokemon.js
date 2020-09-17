import React, { useContext, useEffect, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import style from "./ExamplePokemon.module.css";

const ExamplePokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  useEffect(() => {
    if (pokemonContext.pokemon.length !== 0) {
      pokemonContext.displayContent(true);
    }
    if (pokemonContext.examplePokemon.length <= 0) {
      pokemonContext.getExamplePokemon();
    }
  }, []);

  const onClick = (e) => {
    // const name = e.target.innerText.replace("Name: ", ""); //think of a better dynamic solution
    const name = e.target.innerText;

    pokemonContext.searchPokemon(name.toLowerCase());
  };

  return (
    <Fragment>
      <h2>Example Pokemon</h2>
      <div className={style.container}>
        {pokemonContext.examplePokemon.map((pokemon) => {
          return (
            <div
              onClick={onClick}
              value={pokemon.name}
              className={style.pokemon}
            >
              <p>{pokemon.name}</p>
            </div>
          );
        })}
        {pokemonContext.pokemon > 0 && (
          <img src={pokemonContext.pokemon.sprites.front_default}></img>
        )}
      </div>
    </Fragment>
  );
};

export default ExamplePokemon;
