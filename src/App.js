import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Carrito from "./components/Carrito";

function App() {
  //crear listado de productos
  const [products, guardarProducts] = useState([
    {
      id: 1,
      nombre: "Camisa de ReactJS",
      img:
        "https://ae01.alicdn.com/kf/H147e1c3c639243119da9b922dc89644aO/Camiseta-para-hombre-ReactJS-React-js-Logo-oficial-JavaScript-Framework-camiseta-Unisex-camiseta-impresa-camiseta-camisetas.jpg_q50.jpg",
      precio: 50,
    },
    {
      id: 2,
      nombre: "Camisa de NodeJS",
      img:
        "https://rlv.zcache.es/polo_de_node_js-rec111ddbc5a94b90839b25df2e97b093_k2gm3_307.jpg",
      precio: 60,
    },
    {
      id: 3,
      nombre: "Camisa de VueJS",
      img:
        "https://www.dhresource.com/600x600/f2/albu/g7/M00/08/DB/rBVaSlvYOEyACnd5AACQ8I0NP18164.jpg",
      precio: 30,
    },
    {
      id: 4,
      nombre: "Camisa de Angular 9",
      img:
        "https://www.dhresource.com/0x0/f2/albu/g9/M01/B8/25/rBVaWF0MbdyAddofAAFppKY66L0106.jpg",
      precio: 45,
    },
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
