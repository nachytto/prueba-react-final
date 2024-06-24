import React, { createContext, useContext, useReducer } from 'react';
import pizzasData from '../src/data/pizzas.js'; 

const AppContext = createContext();

const initialState = {
  pizzas: pizzasData,
  cart: []
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
