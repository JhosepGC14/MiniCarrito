import React from "react";
import "./css/carrito.css";
import Products from "./Products";

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Tu Carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>No hay Elementosen el Carrito.</p>
    ) : (
      carrito.map((producto) => (
        <Products
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))
    )}
  </div>
);

export default Carrito;
