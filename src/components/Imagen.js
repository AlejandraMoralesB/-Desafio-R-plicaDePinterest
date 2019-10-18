import React from "react";

const Imagen = ({ imagen }) => {
  const { previewURL, tags } = imagen;

  return (
    <div className="col-12  col-md-3 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
      </div>
    </div>
  );
};

export default Imagen;
