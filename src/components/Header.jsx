import React from "react";

function Header({ titulo, fecha }) {
  return (
    <h1 id="encabezado" className="encabezado">
      {titulo}
      {fecha}
    </h1>
  );
}

export default Header;
