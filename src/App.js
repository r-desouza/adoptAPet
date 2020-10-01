import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="someting-important">Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Bulldog" />
      <Pet name="Tito" animal="Dog" breed="Caniche" />
      <Pet name="Piggy" animal="Dog" breed="Shitzu" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
