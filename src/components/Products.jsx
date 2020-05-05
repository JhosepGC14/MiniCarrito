import React from "react";

const Products = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  const selectProduct = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  //Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    //colorcar los productos en el state
    agregarProducto(productos);
  };

  return (
    <ul>
      <li>{nombre}</li>
      <span>Precio: ${precio}</span>

      {productos ? (
        <button type="button" onClick={() => selectProduct(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </ul>
  );
};

export default Products;
