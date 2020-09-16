import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonContext from "./context/pokemon/pokemonContext";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import ExamplePokemon from "./components/ExamplePokemon/ExamplePokemon";
import loader from "./images/loading.svg"; //turn into a component later

import SearchPokemonPage from "./layout/SearchPokemonPage/SearchPokemonPage";
import NavBar from "./layout/NavBar/NavBar";

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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/search" component={SearchPokemonPage} />
        </Switch>
        <Switch>
          <Route exact path="/examplepokemon" component={ExamplePokemon} />
        </Switch>

        {display ? card : <div></div>}
      </Router>
    </div>
  );
};

export default App;
