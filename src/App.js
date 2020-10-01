import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from './Details';


const App = () => {
  return (
    <div>
      <h1 id="someting-important">Adopt me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
