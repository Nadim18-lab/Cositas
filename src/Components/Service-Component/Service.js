import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ServiceCSS from "./Service.module.css";

class Service extends Component {
  render() {
    return (
      <div>
        <div className={[ServiceCSS.fondo, ServiceCSS.header].join(" ")}>
          <div className={ServiceCSS.Contenedor}>
            <h1 className={ServiceCSS.Titulo}>Sobre Nosotros</h1>
            <div className={ServiceCSS.cardPadre}>
              <div className={`${ServiceCSS.Mycard} card`}>
                <div className={`${ServiceCSS.Mycontainer} `}>
                  <i className={`${ServiceCSS.icon} fas fa-images`}></i>
                  
                </div>
                <div className={`${ServiceCSS.Mybody} `}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.Some quick example text to build on the card title
                    and make
                  </p>
                </div>
              </div>
              <div className={`${ServiceCSS.Mycard} card`}>
                <div className={`${ServiceCSS.Mycontainer} `}>
                  <i className={`${ServiceCSS.icon2} fab fa-apple`}></i>
                </div>
                <div className={`${ServiceCSS.Mybody} `}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className={`${ServiceCSS.Mycard} card`}>
                <div className={`${ServiceCSS.Mycontainer} `}>
                  <i className={`${ServiceCSS.icon3} fas fa-dna`}></i>
                </div>
                <div className={`${ServiceCSS.Mybody} `}>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
