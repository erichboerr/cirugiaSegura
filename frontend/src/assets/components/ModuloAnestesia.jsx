import React from "react";

const ModuloAnestesia = (props) => {
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
                name="AnestesiaChk"
                id="AnestesiaChkGeneral"
                value={"General"}
              />
              <label className="form-check-label" htmlFor="AnestesiaChkGeneral">
                General
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnestesiaChk"
                id="AnestesiaChkBloqueo"
                value={"Bloqueo"}
              />
              <label className="form-check-label" htmlFor="AnestesiaChkBloqueo">
                Bloqueo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnestesiaChk"
                id="AnestesiaChkSedación"
                value={"Sedación"}
              />
              <label
                className="form-check-label"
                htmlFor="AnestesiaChkSedación"
              >
                Sala de internación guardia
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnestesiaChk"
                id="AnestesiaChkLocal"
                value={"Local"}
              />
              <label className="form-check-label" htmlFor="AnestesiaChkLocal">
                Local
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloAnestesia;
