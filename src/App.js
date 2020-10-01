import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Bulldog",
    }),
    React.createElement(Pet, {
      name: "Tito",
      animal: "Dog",
      breed: "Caniche",
    }),
    React.createElement(Pet, {
      name: "Piggy",
      animal: "Dog",
      breed: "Shitzu",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
