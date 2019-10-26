import React from "react";
import "./buttonsOptions.css";

const ButtonsOptions = () => {
  return (
    <section className="footer">
      <div>
        <button className="btn-plus">
          <i className="glyphicon glyphicon-plus"></i>
        </button>
      </div>
      <div>
        <button className="btn-question">
          <i className=" 	glyphicon glyphicon-question-sign"></i>
        </button>
      </div>
    </section>
  );
};
export default ButtonsOptions;
