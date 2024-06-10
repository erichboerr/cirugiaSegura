import React from "react";

const ModuloPulsera = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
      <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente se retira con pulsera identificatoria colocada:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PulseraOutChk"
                id="PulseraOutChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="PulseraOutChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PulseraOutChk"
                id="PulseraOutChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="PulseraOutChkNo">
                No
              </label>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default ModuloPulsera;
