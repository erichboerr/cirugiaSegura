import React from "react";

const ModuloImplantes = (props) => {
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
            id="flexCheckMalla"
          />
          <label className="form-check-label" htmlFor="flexCheckMalla">
            Malla
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckPrótesisMama"
          />
          <label className="form-check-label" htmlFor="flexCheckPrótesisMama">
            Prótesis de mama
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOsteosintesis"
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis">
            Material de osteosintesis (placa y tornillos) traumatología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOsteosintesis2"
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis2">
            Material de osteosintesis tornillos traumatología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckOsteosintesis3"
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis3">
            Material de osteosintesis cirugía maxilofacial
          </label>
        </div>
      </div>

      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckCadera"
          />
          <label className="form-check-label" htmlFor="flexCheckCadera">
            Prótesis total de cadera
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckParcialCadera"
          />
          <label className="form-check-label" htmlFor="flexCheckParcialCadera">
            Prótesis parcial de cadera
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckPrótesisRodilla"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckPrótesisRodilla"
          >
            Prótesis de rodilla
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckClavoEnfomedular"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckClavoEnfomedular"
          >
            Clavo enfomedular
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDhs"
          />
          <label className="form-check-label" htmlFor="flexCheckDhs">
            Dhs
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckSuturasMecanicas"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckSuturasMecanicas"
          >
            Suturas mecánicas
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckK108"
          />
          <label className="form-check-label" htmlFor="flexCheckK108">
            K 108
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

export default ModuloImplantes;
