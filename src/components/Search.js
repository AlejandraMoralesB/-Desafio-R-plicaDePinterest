import React, { useState } from "react";

function Search({ guardarBusqueda }) {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState("");

  const [error, guardarError] = useState(false);

  const buscarImagen = e => {
    e.preventDefault();

    //validar

    if (terminoBusqueda === "") {
      guardarError(true);
      return;
    }
    //Enviar el termino hacia el componente principal
    guardarError(false);
    guardarBusqueda(terminoBusqueda);
  };

  return (
    <form
      onSubmit={buscarImagen}
      //accion para mandar el dato capturado
    >
      <div className="content-input border-search">
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          className="input-search color-text"
          placeholder="Buscar"
          type="text"
          // el cambio que se genera
          onChange={e => guardarTerminoBusqueda(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
