import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../appContext";
import "../styles/DetallePizza.css";

const DetallePizza = () => {
  const { id } = useParams();
  const { state, dispatch } = useAppContext();

  const pizza = state.pizzas.find((pizza) => pizza.id === id);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: pizza });
    animateButton();
  };

  const animateButton = () => {
    const button = document.getElementById("add-to-cart-button");
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300);
  };

  return (
    <div className="pizza-details-container">
      {pizza ? (
        <>
          <div className="container-detalles">
            <section className="imagen">
              <img src={pizza.img} alt={pizza.name} />
            </section>

            <div className="pizza-info">
              <h2>{pizza.name}</h2>
              <p>{pizza.desc}</p>

              <div className="pizza-ingredientes">
                <h3>Ingredientes:</h3>
                <ul>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <section className="otros-detalles">
                <p>Price: ${pizza.price}</p>
                <div className="botones">
                  <button id="add-to-cart-button" onClick={addToCart}>
                    Añadir al carrito
                  </button>
                  <Link to="/" className="volver-menu">
                    Volver Al Menu
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : (
        <div>Pizza not found</div>
      )}
    </div>
  );
};

export default DetallePizza;
