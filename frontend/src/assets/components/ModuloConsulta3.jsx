import React from "react";

const ModuloConsulta3 = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Se tomaron muestras para cultivo?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="CultivoChk"
                id="CultivoChkSi"
                value={1}                
              />
              <label className="form-check-label" htmlFor="CultivoChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="CultivoChk"
                id="CultivoChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="CultivoChkNo">
                No
              </label>
            </div>
          </div>
        </div>     

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Se enviaron piezas a anatomía patológica?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnatomiaChk"
                id="AnatomiaChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="AnatomiaChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnatomiaChk"
                id="AnatomiaChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="AnatomiaChkNo">
                No
              </label>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default ModuloConsulta3;
