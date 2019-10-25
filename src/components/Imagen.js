import React from "react";
import "./imagen.css";

const Imagen = ({ imagen }) => {
  const { previewURL, tags } = imagen;

  return (
    <div className="content-img">
      <img src={previewURL} alt={tags} className="images-list" />
    </div>
  );
};

export default Imagen;
