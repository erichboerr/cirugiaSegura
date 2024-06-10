import React from "react";

const ModuloConsulta4 = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de instrumental fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoInstrumentalChk"
                id="conteoInstrumentalChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="conteoInstrumentalChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoInstrumentalChk"
                id="conteoInstrumentalChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="conteoInstrumentalChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de elementos corto punzantes fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoCortoPunzantesChk"
                id="conteoCortoPunzantesChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="conteoCortoPunzantesChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoCortoPunzantesChk"
                id="conteoCortoPunzantesChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="conteoCortoPunzantesChkNo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de gasas utilizadas fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoGasasChk"
                id="conteoGasasChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="conteoGasasChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoGasasChk"
                id="conteoGasasChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="conteoGasasChkNo">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloConsulta4;
