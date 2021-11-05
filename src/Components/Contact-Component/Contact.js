import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="img-container"></div>
        <div class="header">
          <h1>Contactanos</h1>
          <p>
            Amet consequat occaecat aliqua veniam adipisicing quis dolor in amet
            eiusmod.
            <br /> Consectetur anim consectetur Lorem sunt culpa dolore est amet
            ea deserunt dolor enim.
            <br /> Proident ullamco minim elit amet deserunt laborum ullamco
            aute nulla.
          </p>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Deja tus datos</h5>
              <form>
                <div class="float-left">
                  <div class="mb-3">
                    <label for="exampleInputEmail1  " class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1  " class="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      class="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div class="float-right">
                  <div class="mb-3">
                    <label for="exampleInputEmail1  " class="form-label">
                      Numero
                    </label>
                    <input
                      type="text"
                      class="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1  " class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div class="question-container">
                  <div>
                    <label for="exampleInputEmail1  " class="form-label">
                      Consulta
                    </label>
                    <input
                      type="text"
                      class="form-control question-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <button type="submit" class="submit-btn btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
