import React from "react";

const ModuloCirugia = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tipoCirugiaChk"
                id="tipoCirugiaChkProgramada"
                value={0}
              />
              <label className="form-check-label" htmlFor="tipoCirugiaChkProgramada">
                Programada
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tipoCirugiaChk"
                id="tipoCirugiaChkUrgencia"
                value={1}
              />
              <label class="form-check-label" htmlFor="tipoCirugiaChkUrgencia">
                Urgencia
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloCirugia;
