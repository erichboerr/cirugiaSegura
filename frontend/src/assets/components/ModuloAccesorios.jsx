import React from "react";

const ModuloAccesorios = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckNunguno"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckNunguno">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckAros"
          />
          <label className="form-check-label" htmlFor="flexCheckAros">
            Aros
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckPiercing"
          />
          <label className="form-check-label" htmlFor="flexCheckPiercing">
          Piercing
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckCollar"
          />
          <label className="form-check-label" htmlFor="flexCheckCollar">
          Collar
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckPulsera"
          />
          <label className="form-check-label" htmlFor="flexCheckPulsera">
          Pulsera
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckReloj"
          />
          <label className="form-check-label" htmlFor="flexCheckReloj">
          Reloj
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckProtesis"
          />
          <label className="form-check-label" htmlFor="flexCheckProtesis">
          Protesis dental removible
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckMovil"
          />
          <label className="form-check-label" htmlFor="flexCheckMovil">
          Telefono celular
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckRopa"
          />
          <label className="form-check-label" htmlFor="flexCheckRopa">
          Ropa
          </label>
        </div>
      </div>








    </section>
  );
};

export default ModuloAccesorios;
