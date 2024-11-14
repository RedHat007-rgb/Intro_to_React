import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      {/* <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image={"/public/pizzas/big_meat.webp"}
      /> */}
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

/// learned how to convert a  js  to jsx...

// import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";

// //props=> props are like objects once we create a function using props, we can pass or use that in any function.
// //props make developers life very easy because once the  has been called in an component,

// // const pizza = (props) => {
// //   return React.createElement("div", {}, [
// //     React.createElement("h1", {}, props.name),
// //     React.createElement("p", {}, props.description),
// //   ]);
// // };
// //This is the main function;we write all the code to render in our webpage
// const App = () => {
//   return (
//     <div>
//       <h1>Padre Gino's - OrderNow</h1>
//       <Pizza
//         name="pepperoni"
//         description="delicious pizza with mix of chicken and mutton"
//         image={"/public/pizzas/pepperoni.webp"}
//       ></Pizza>
//       <Pizza
//         name="big_meat"
//         description="mixed with cheese and pineapple"
//         image={"/public/pizzas/big_meat.webp"}
//       ></Pizza>
//     </div>
//   );
// };

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
