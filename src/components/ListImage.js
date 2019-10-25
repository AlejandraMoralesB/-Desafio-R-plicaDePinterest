import React from "react";
import Imagen from "./Imagen";
import "./ListImage.css";

function ListImage({ imagenes }) {
  return (
    <div className="content-images">
      {imagenes.map(imagen => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
}

export default ListImage;
