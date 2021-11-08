import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="nav">
            <div className="nav_div">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
            </div>
          </ul>
          <ul className="nav">
            <div className="nav_div">
              <li>
                <Link to={"/contact"}>Contacto</Link>
              </li>
            </div>
          </ul>
          <ul className="nav">
            <div className="nav_div">
              <li>
                <Link to={"/service"}>Servicio</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="header">
          <div className="header_title">
            <h1>TITLE</h1>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
