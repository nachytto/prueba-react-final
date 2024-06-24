import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaPizzas from "./components/ListasPizzas";
import DetallePizza from "./components/DetallePizza";
import Cart from "./components/Carta";
import { AppProvider } from './appContext';
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-brand">
              <Link to="/" className="link-icon">Pizzería</Link> 
            </div>
            <div className="navbar-cart">
              <Link to="/cart" className="link-icon">
                <FaShoppingCart />
              </Link>
            </div>
          </nav>
          {/* Rutas */}
          <Routes>
            <Route path="/" element={<ListaPizzas />} />
            <Route path="/pizza/:id" element={<DetallePizza />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
