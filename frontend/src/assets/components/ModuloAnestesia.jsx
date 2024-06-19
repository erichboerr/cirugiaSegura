import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloAnestesia = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-5">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnestesiaChk"
                id="AnestesiaChkGeneral"
                value={"0"}
                {...register("AnestesiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
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
                value={"1"}
                {...register("AnestesiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
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
                value={"2"}
                {...register("AnestesiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="AnestesiaChkSedación"
              >
                Sedación
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnestesiaChk"
                id="AnestesiaChkLocal"
                value={"3"}
                {...register("AnestesiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="AnestesiaChkLocal">
                Local
              </label>
            </div>
            {errors.AnestesiaChk && (
              <span className="text-danger">{errors.AnestesiaChk.message}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloAnestesia;
