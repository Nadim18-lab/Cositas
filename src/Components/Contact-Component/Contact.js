import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ContactSCSS from "./Contact.module.scss";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className={ContactSCSS.header}>
          <h1>Contactanos</h1>
          <p>
            Amet consequat occaecat aliqua veniam adipisicing quis dolor in amet
            eiusmod.
            <br /> Consectetur anim consectetur Lorem sunt culpa dolore est amet
            ea deserunt dolor enim.
            <br /> Proident ullamco minim elit amet deserunt laborum ullamco
            aute nulla.
          </p>
          <div className={`${ContactSCSS.myCard} card`}>
            <div className="card-body">
              <h5 className={`${ContactSCSS.label} card-title`}>
                Deja tus datos
              </h5>
              <form>
                <div className={ContactSCSS.floatLeft}>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1  "
                      className={`${ContactSCSS.label} form-label`}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className={`${ContactSCSS.inputStyle} form-control`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1  "
                      className={`${ContactSCSS.label} form-label`}
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      className={`${ContactSCSS.inputStyle} form-control`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div className={ContactSCSS["float-right"]}>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1  "
                      className={`${ContactSCSS.label} form-label`}
                    >
                      Numero
                    </label>
                    <input
                      type="text"
                      className={`${ContactSCSS.inputStyle} form-control`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1  "
                      className={`${ContactSCSS.label} form-label`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`${ContactSCSS.inputStyle} form-control`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                </div>
                <div className={ContactSCSS.questionContainer}>
                  <div>
                    <label
                      for="exampleInputEmail1  "
                      className={`${ContactSCSS.label} form-label`}
                    >
                      Consulta
                    </label>
                    <input
                      type="text"
                      className={`${ContactSCSS.questionInput} form-control`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <button
                    type="submit"
                    className={`${ContactSCSS.submitBtn} btn`}
                  >
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
