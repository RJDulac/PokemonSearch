import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import styles from "./PokemonCard.module.css";

const PokemonCard = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemon } = pokemonContext;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>{pokemon.species.name}</p>
        <div className={styles.imageContainer}>
          <p>Offical artwork</p>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.species.name}
          />
          <p>Normal</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
          <p>Shiny</p>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.species.name} />
        </div>
        <p>Abilities</p>
        {pokemon.abilities.map((ability) => {
          return <p>{ability.ability.name}</p>;
        })}
        {pokemon.moves.map((moves) => {
          console.log("nothing");
          {
            /* truncate move list name and add a show more button */
          }
          {
            /* return console.log(moves.move.name); */
          }
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
