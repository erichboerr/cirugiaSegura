import React from "react";

const ModuloProcedencia = (props) => {
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
                name="ProcedenciaChk"
                id="ProcedenciaChkAmbulatoria"
                value={"ambulatoria"}
                
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkAmbulatoria">
              Ambulatoria
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntGral"
                value={"Sala de internación general"}
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkIntGral">
              Sala de internación general
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntGuardia"
                value={"Sala de internación de guardia"}
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkIntGuardia">
              Sala de internación guardia
              </label>
            </div>
          </div>          
        </div>
        <div className="card text-center col-md-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkShockRoom"
                value={"Shock room"}
                
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkShockRoom">
              Shock room
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntIntensivos"
                value={"Unidad de cuidados intensivos"}
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkIntIntensivos">
              Unidad de cuidados intensivos
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntIntermedios"
                value={"Unidad de cuidados intermedios"}
              />
              <label className="form-check-label" htmlFor="ProcedenciaChkIntIntermedios">
              Unidad de cuidados intermedios
              </label>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default ModuloProcedencia;
