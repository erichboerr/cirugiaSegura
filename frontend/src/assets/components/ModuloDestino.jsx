import React from "react";

const ModuloDestino = (props) => {
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
            id="flexCheckAmbulatorio"
          />
          <label className="form-check-label" htmlFor="flexCheckAmbulatorio">
          Ambulatorio
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckInternaciónGeneral"
          />
          <label className="form-check-label" htmlFor="flexCheckInternaciónGeneral">
          Sala de internación general
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckUTI"
          />
          <label className="form-check-label" htmlFor="flexCheckUTI">
          Unidad de cuidados intensivos
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckUCI"
          />
          <label className="form-check-label" htmlFor="flexCheckUCI">
          Unidad de cuidados intermedios
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckInternacionGuardia"
          />
          <label className="form-check-label" htmlFor="flexCheckInternacionGuardia">
          Internación de guardia
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckShockRoom"
          />
          <label className="form-check-label" htmlFor="flexCheckShockRoom">
          Shock Room
          </label>
        </div>
      </div>

      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckMorgue"
          />
          <label className="form-check-label" htmlFor="flexCheckMorgue">
          Morgue
          </label>
        </div>
      </div>   
      
    </section>
  );
};

export default ModuloDestino;
