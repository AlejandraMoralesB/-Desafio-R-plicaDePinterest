import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content-icon">
        <div>
          <div ClassName="content-input">
            <i className="fas fa-search"></i>
            <a href="">
              <img
                className="logo"
                src="https://i.ibb.co/r4t0P6N/unnamed.png"
                alt="logo pinterest"
                border="0"
              ></img>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="content-input border-search">
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          className="input-search color-text"
          placeholder="Buscar"
          type="text"
        />
      </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
