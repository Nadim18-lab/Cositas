import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <h1>Contactanos</h1>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Deja tus datos</h5>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Numero
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Consulta
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
