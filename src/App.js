import React from "react";
import "./index.css";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Mazda from "./components/Mazda";
import Sparq from "./components/Sparq";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(routeProps) => <Home {...routeProps} />} />
      <Route
        exact
        path="/sparq"
        render={(routeProps) => <Sparq {...routeProps} />}
      />
      <Route
        exact
        path="/mazda"
        render={(routeProps) => <Mazda {...routeProps} />}
      />
    </div>
  );
}

export default App;
