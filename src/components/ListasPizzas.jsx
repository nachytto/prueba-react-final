import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import pizzas from "../data/pizzas";
import { useAppContext } from "../appContext";
import "../styles/ListaPizzas.css";

const ListaPizzas = () => {
  const { state, dispatch } = useAppContext();

  const addToCart = (pizza) => {
    dispatch({ type: "ADD_TO_CART", payload: pizza });
    animateButton(pizza.id);
  };

  const animateButton = (id) => {
    const button = document.getElementById(`button-${id}`);
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300);
  };

  return (
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <img src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <div className="ingredients">
            <h4>Ingredientes:</h4>
            <hr />
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <p>Precio: ${pizza.price}</p>
          <div className="buttons">
            <Link to={`/pizza/${pizza.id}`} className="details-button">
              Detalles
            </Link>
            <button id={`button-${pizza.id}`} onClick={() => addToCart(pizza)}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaPizzas;
