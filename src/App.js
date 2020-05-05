import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Carrito from "./components/Carrito";

function App() {
  //crear listado de productos
  const [products, guardarProducts] = useState([
    { id: 1, nombre: "Camisa de ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa de NodeJS", precio: 60 },
    { id: 3, nombre: "Camisa de VueJS", precio: 30 },
    { id: 4, nombre: "Camisa de Angular 9", precio: 45 },
  ]);

  //state para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual " fecha={fecha} />
      <h1>Lista de Productos</h1>
      {products.map((producto) => (
        <Products
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={products}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
