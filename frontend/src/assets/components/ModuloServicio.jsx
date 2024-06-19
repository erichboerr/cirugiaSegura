import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloServicio = (props) => {
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
        <div className="card text-center col-md-4">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkCirugiaGral"
                value={"0"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkCirugiaGral"
              >
                Cirugia General
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkTraumatologia"
                value={"1"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkTraumatologia"
              >
                Traumatología
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkMaxilofacial"
                value={"2"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkMaxilofacial"
              >
                Maxilofacial
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkGinecología"
                value={"3"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkGinecología"
              >
                Ginecología
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkUrología"
                value={"4"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkUrología"
              >
                Urología
              </label>
            </div>
          </div>
        </div>
        <div className="card text-center col-md-4">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkOftalmología"
                value={"5"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkOftalmología"
              >
                Oftalmología
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkOtorrinología"
                value={"6"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkOtorrinología"
              >
                Otorrinolaringología
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkGastroenterología"
                value={"7"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkGastroenterología"
              >
                Gastroenterología
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ServicioIntervinienteChk"
                id="ServInterChkMaternidad"
                value={"8"}
                {...register("ServicioIntervinienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="ServInterChkMaternidad"
              >
                Maternidad
              </label>
            </div>
          </div>
        </div>
        {errors.ServicioIntervinienteChk && (
          <span className="text-danger">
            {errors.ServicioIntervinienteChk.message}
          </span>
        )}
      </div>
    </section>
  );
};

export default ModuloServicio;
