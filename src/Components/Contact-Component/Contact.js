import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ContactSCSS from "./Contact.module.scss";


class Contact extends Component {
  render() {
    return (
      <div>
        <div className={[ContactSCSS.header].join(" ")}>
          <h1>Contactanos</h1>
          <p>
            Amet consequat occaecat aliqua veniam adipisicing quis dolor in amet
            eiusmod.
            <br /> Consectetur anim consectetur Lorem sunt culpa dolore est amet
            ea deserunt dolor enim.
            <br /> Proident ullamco minim elit amet deserunt laborum ullamco
            aute nulla.
          </p>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title label">Deja tus datos</h5>
              <form>
                <div className="float-left">
                  <div className="mb-3">
                    <label for="exampleInputEmail1  " className="label form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1  " className="label form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div className="float-right">
                  <div className="mb-3">
                    <label for="exampleInputEmail1  " className="label form-label">
                      Numero
                    </label>
                    <input
                      type="text"
                      className="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1  " className="label form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-style form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div className="question-container">
                  <div>
                    <label for="exampleInputEmail1  " className="label form-label">
                      Consulta
                    </label>
                    <input
                      type="text"
                      className="form-control question-input"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <button type="submit" className="submit-btn btn btn-primary">
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
