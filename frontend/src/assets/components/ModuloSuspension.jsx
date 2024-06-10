import React from "react";

const ModuloSuspencion = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckAyuno"
          />
          <label className="form-check-label" htmlFor="flexCheckAyuno">
          Falta de ayuno
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckFaltaSangre"
          />
          <label className="form-check-label" htmlFor="flexCheckFaltaSangre">
          Falta de sangre
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckCamaUCI"
          />
          <label className="form-check-label" htmlFor="flexCheckCamaUCI">
          Falta de cama en UCI
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckCondicionesInstrumental"
          />
          <label className="form-check-label" htmlFor="flexCheckCondicionesInstrumental">
          Condiciones del instrumental de colocación e implante del material de ortopedia          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckNinguno"
          />
          <label className="form-check-label" htmlFor="flexCheckNinguno">
          No
          </label>
        </div>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="Otros"
          placeholder="Otros"
        />
      </div>
      
    </section>
  );
};

export default ModuloSuspencion;
