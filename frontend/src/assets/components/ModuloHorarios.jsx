import React from "react";

const ModuloHorarios = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Area Quirúrgica</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInit" className="form-label ">
              Ingreso:
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInit"
              required
            />
            <label htmlFor="inputOut" className="form-label">
              Egreso:
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputOut"
              required
            />
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Quirófano</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInitQX" className="form-label">
              Ingreso:
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInitQX"
              required
            />
            <label htmlFor="inputOutQX" className="form-label">
              Egreso:
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputOutQX"
              required
            />
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Cirugía</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInitQX" className="form-label">
              Comienzo:
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInitQX"
              required
            />
            <label htmlFor="inputOutQX" className="form-label">
              Finalización:
            </label>
            <input
              type="time"
              className="form-control text-center mb-2"
              id="inputOutQX"
              required
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloHorarios;
