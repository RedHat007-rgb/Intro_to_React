import Pizza from "./Pizza";
import { useState } from "react";

export default function Order() {
  const [pizzaType, setPizzatype] = useState("pepperoni");
  const [pizzasize, setPizzaSize] = useState("L");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizzatype">Pizza Type</label>
            <select name="pizzatype" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizzasize">Pizza Size</label>
          </div>
          <div>
            <span>
              <input
                checked={pizzasize === "S"}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
              ></input>
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                checked={pizzasize === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              ></input>
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                checked={pizzasize === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
              ></input>
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
          <div>
            <button type="Submit">Add to Cart</button>
          </div>
          <div className="order-pizza">
            <Pizza
              name="Pepporoni"
              description="another pep pizza"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$14.99</p>
          </div>
        </div>
      </form>
    </div>
  );
}
