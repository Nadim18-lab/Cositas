import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ServiceCSS from "./Service.module.css";
import serviceData from "../../Assets/data/services.json";

class Service extends Component {
  state = { serviceData: serviceData };

  render() {
    return (
      <div>
        <div className={[ServiceCSS.fondo, ServiceCSS.header].join(" ")}>
          <div className={ServiceCSS.Contenedor}>
            <h1 className={ServiceCSS.Titulo}>Sobre Nosotros</h1>
            <div className={ServiceCSS.cardPadre}>
              {this.state.serviceData.map((c) => (
                <div className={`${ServiceCSS.Mycard} card`}>
                  <div className={`${ServiceCSS.Mycontainer} `}>
                    <i className={`${ServiceCSS.icon} ${c.icon}`}></i>
                  </div>
                  <div className={`${ServiceCSS.Mybody} `}>
                    <h5 className="card-title">{c.title}</h5>
                    <p className="card-text">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
