import React from "react";
import { FaUndoAlt } from "react-icons/fa";
import { Form } from "./Form";
// import { Link } from 'react-router-dom';
import "./Form.css"
export const FormNav = () => {
  return (
    <div className="main">
      <div className="text" >
        <h1>LOCATEINV 5549475</h1>
        <a href="/">
          <FaUndoAlt />
        </a>
      </div>
      
      <div className="date" >
        <label><h1>SHIP DATE</h1></label>
        <input type="date" name="" id="" />
      </div>
      <div className="refrence" >
        <label>
          <h1>REFRENCE</h1>
        </label>
        <input type="number" name="" id="" />
      </div>
      <div>
      </div>
    </div>
    
  );
};
