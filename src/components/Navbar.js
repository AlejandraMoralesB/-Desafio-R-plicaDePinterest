import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Search from "./Search";
import ListImage from "./ListImage";

function Navbar() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 20;
      const key = "13914263-0b302888b20136cdbe03baab4";

      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <nav className="navbar">
      <div className="content-icon">
        <div>
          <div className="content-input">
            <i className="fas fa-search"></i>
            <a href="">
              <img
                className="logo"
                src="https://i.ibb.co/r4t0P6N/unnamed.png"
                alt="logo pinterest"
                border="0"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <Search guardarBusqueda={guardarBusqueda} />
      <div className="second-content">
        <div className="color-text navtext" style={{ color: "#262626" }}>
          Inicio
        </div>
        <div className="color-text navtext">Siguiendo</div>
        <div className="content-profile navtext color-text">
          <div>
            <i className="fas fa-user-circle"></i>
          </div>
          <div>AleBea</div>
        </div>
        <div className="border-separator padding-navtext"></div>
        <div className="content-iconright">
          <i className="fas fa-comment-dots"></i>
        </div>
        <div className="content-iconright">
          <i className="fas fa-bell"></i>
        </div>
        <div className="content-iconright">
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div>
          <ListImage imagenes={imagenes} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
