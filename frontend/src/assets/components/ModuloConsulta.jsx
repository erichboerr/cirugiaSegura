import React from "react";

const ModuloConsulta = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente ingresa con pulsera identificatoria colocada?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PulseraChk"
                id="PulseraChkSi"
                value={1}
                checked
              />
              <label className="form-check-label" htmlFor="PulseraChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="PulseraChk"
                id="PulseraChkNo"
                value={0}
              />
              <label class="form-check-label" htmlFor="PulseraChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente tiene consentimiento informado firmado:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ConsentimientoChk"
                id="ConsentimientoChkSi"
                value={1}
                checked
              />
              <label className="form-check-label" htmlFor="ConsentimientoChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ConsentimientoChk"
                id="ConsentimientoChkNo"
                value={0}
              />
              <label class="form-check-label" htmlFor="ConsentimientoChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente tiene ayuno:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AyunoChk"
                id="AyunoChkSi"
                value={1}
                checked
              />
              <label className="form-check-label" htmlFor="AyunoChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AyunoChk"
                id="AyunoChkNo"
                value={0}
              />
              <label class="form-check-label" htmlFor="AyunoChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente tiene marcapasos:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="MarcapasosChk"
                id="MarcapasosChkSi"
                value={1}
                checked
              />
              <label className="form-check-label" htmlFor="MarcapasosChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="MarcapasosChk"
                id="MarcapasosChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="MarcapasosChkNo">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloConsulta;
