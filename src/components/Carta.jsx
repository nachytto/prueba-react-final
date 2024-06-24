import React from 'react';
import { useAppContext } from '../appContext';

const Carta = () => {
  const { state } = useAppContext();

  const total = state.cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {state.cart.length === 0 ? (
        <p>Tu carro esta vacio</p>
      ) : (
        <>
          <ul>
            {state.cart.map(item => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </>
      )}
    </div>
  );
};

export default Carta;
