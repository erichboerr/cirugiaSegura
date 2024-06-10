import React from "react";

const ModuloServicio = (props) => {
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
            id="flexCheckCirugiaGeneral"
          />
          <label className="form-check-label" htmlFor="flexCheckCirugiaGeneral">
            Cirugia General
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckTraumatología"
          />
          <label className="form-check-label" htmlFor="flexCheckTraumatología">
            Traumatología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckMaxilofacial"
          />
          <label className="form-check-label" htmlFor="flexCheckMaxilofacial">
            Maxilofacial
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckGinecología"
          />
          <label className="form-check-label" htmlFor="flexCheckGinecología">
            Ginecología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckUrología"
          />
          <label className="form-check-label" htmlFor="flexCheckUrología">
            Urología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOftalmología"
          />
          <label className="form-check-label" htmlFor="flexCheckOftalmología">
            Oftalmología
          </label>
        </div>
      </div>

      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOtorrino"
          />
          <label className="form-check-label" htmlFor="flexCheckOtorrino">
            Otorrinolaringología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckGastroenterología"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckGastroenterología"
          >
            Gastroenterología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckMaternidad"
          />
          <label className="form-check-label" htmlFor="flexCheckMaternidad">
            Maternidad
          </label>
        </div>
      </div>
    </section>
  );
};

export default ModuloServicio;
