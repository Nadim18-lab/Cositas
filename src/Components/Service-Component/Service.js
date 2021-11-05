import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./Service.css";

class Service extends Component {
  render() {
    return (
      <div>
        <div class="fondo header">
          <div class="Contenedor">
            <h1 class="Titulo">Sobre Nosotros</h1>
            <div class="cardPadre">
              <div class="card">
                <div class="icon-container"><i class="fas fa-images icon"></i></div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="icon-container"><i class="fab fa-apple icon2"></i></div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="icon-container"><i class="fas fa-dna icon3"></i></div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
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
