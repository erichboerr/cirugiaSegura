import React from "react";

const ModuloDrenajes = (props) => {
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
            id="flexCheckNunguno"
          />
          <label className="form-check-label" htmlFor="flexCheckNunguno">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckJacksonPratt"
          />
          <label className="form-check-label" htmlFor="flexCheckJacksonPratt">
            Tipo Jackson Pratt
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckLatex"
          />
          <label className="form-check-label" htmlFor="flexCheckLatex">
            Latex
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckK225"
          />
          <label className="form-check-label" htmlFor="flexCheckK225">
            K 225
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckK227"
          />
          <label className="form-check-label" htmlFor="flexCheckK227">
            K 227
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckK10"
          />
          <label className="form-check-label" htmlFor="flexCheckK10">
            K 10
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

export default ModuloDrenajes;
