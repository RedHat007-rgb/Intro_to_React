import React from "react";
import { createRoot } from "react-dom";

//props=> props are like objects once we create a function using props, we can pass or use that in any function.
//props make developers life very easy because once the obeject has been called in an component,

const pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
//This is the main function;we write all the code to render in our webpage
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(pizza, {
      name: "The meat Fieast",
      description: "delicious pizza with mix of chicken and mutton",
    }),
    React.createElement(pizza, {
      name: "Americano",
      description: "mixed with cheese and pineapple",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
