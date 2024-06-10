import React from "react";

const ModuloApoyo = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckNunguno"      
                  
          />
          <label className="form-check-label" htmlFor="flexCheckNunguno">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckradiologia"
          />
          <label className="form-check-label" htmlFor="flexCheckradiologia">
          Técnico de radiología
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOrtopedia"
          />
          <label className="form-check-label" htmlFor="flexCheckOrtopedia">
          Técnico de ortopedia
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckAnatomia"
          />
          <label className="form-check-label" htmlFor="flexCheckAnatomia">
          Anatomía patológica por congelación
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

export default ModuloApoyo;
