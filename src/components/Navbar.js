import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Search from "./Search";
import ListImage from "./ListImage";
import Logo from "../img/logo-pin.png";
import Bell from "../img/bell1.svg";
import Chat from "../img/chat1.svg";
import Dots from "../img/dot.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-component";
import ButtonsOptions from "./ButtonsOptions";

function Navbar() {
  const [busqueda, guardarBusqueda] = useState("pasos");
  const [imagenes, guardarImagenes] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      //no haga una busqueda antes
      if (busqueda === "") return;

      const imagenesPorPagina = 20;
      const key = "13914263-0b302888b20136cdbe03baab4";
      const unico = "";
      // escribo como Templete String
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&id=${unico}`;

      // utilizar FETCH
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="content-icon">
          <div>
            <div className="content-input">
              <a href="index.html">
                <img className="logo" src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <Search guardarBusqueda={guardarBusqueda} />
        <div className="second-content">
          <div className="color-text navtext" id="Init">
            Inicio
          </div>
          <div className="color-text navtext">Siguiendo</div>
          <div className="color-text navtext">
            <div className="btn-user">
              <div className="userPic">A</div>
              <div className="userName">Alebea</div>
            </div>
          </div>
          <div className="border-separator padding-navtext"></div>
          <div className="content-iconright">
            <i className="fas fa-comment-dots">
              <img src={Chat} alt="message" />
            </i>
          </div>
          <div className="content-iconright">
            <i className="fas fa-bell">
              <img src={Bell} alt="news" />
            </i>
          </div>
          <div className="content-iconright">
            <i className="fas fa-ellipsis-h">
              <img src={Dots} alt="add" />
            </i>
          </div>
        </div>
      </nav>

      <InfiniteScroll
        dataLength={imagenes.length}
        next={useEffect.consultarApi}
        hasMore={true}
        loader={<h4> ... Loading ...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Masonry>
          <ListImage imagenes={imagenes} />
        </Masonry>
      </InfiniteScroll>
      <ButtonsOptions />
    </div>
  );
}

export default Navbar;
