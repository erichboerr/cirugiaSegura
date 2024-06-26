import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloProcedencia = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded procedencia ">
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
                value={"0"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkAmbulatoria"
              >
                Ambulatoria
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntGral"
                value={"1"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkIntGral"
              >
                Sala de internación general
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntGuardia"
                value={"2"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkIntGuardia"
              >
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
                value={"3"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkShockRoom"
              >
                Shock room
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntIntensivos"
                value={"4"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkIntIntensivos"
              >
                Unidad de cuidados intensivos
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ProcedenciaChk"
                id="ProcedenciaChkIntIntermedios"
                value={"5"}
                {...register("ProcedenciaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ProcedenciaChkIntIntermedios"
              >
                Unidad de cuidados intermedios
              </label>
            </div>
          </div>
        </div>
        {errors.ProcedenciaChk && (
          <span className="text-danger">{errors.ProcedenciaChk.message}</span>
        )}
      </div>
    </section>
  );
};

export default ModuloProcedencia;
