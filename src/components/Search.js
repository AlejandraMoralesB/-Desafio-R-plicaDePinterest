import React, { useState } from "react";
import "./Search.css";
import Error from "./Error";

function Search({ guardarBusqueda }) {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagen = e => {
    e.preventDefault();

    //validar termino de la busqueda en donde no guardo nada

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
      //accion para mandar el dato capturado del state y la validacion
    >
      <div className="content-input border-search">
        <div>
          <i className="   glyphicon glyphicon-search  w3-large "></i>
        </div>
        <input
          className="input-search color-text"
          placeholder="Buscar"
          type="text"
          // el cambio que se genera , al vaidad lo que el usuario escriba
          onChange={e => guardarTerminoBusqueda(e.target.value)}
        />
      </div>
      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
}

export default Search;
