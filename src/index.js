import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import PokemonState from "./context/pokemon/PokemonState";

ReactDOM.render(
  <PokemonState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonState>,
  document.getElementById("root")
);
