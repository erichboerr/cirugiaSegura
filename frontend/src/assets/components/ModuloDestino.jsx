import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloDestino = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded destino ">
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
                name="destinoPacienteChk"
                id="destinoPacienteChkAmbulatorio"
                value={"0"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkAmbulatorio"
              >
                Ambulatorio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="destinoPacienteChk"
                id="destinoPacienteChkIntGral"
                value={"1"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkIntGral"
              >
                Sala de internación general
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="destinoPacienteChk"
                id="destinoPacienteChkUTI"
                value={"2"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkUTI"
              >
                UTI
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="destinoPacienteChk"
                id="destinoPacienteChkUCI"
                value={"3"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkUCI"
              >
                UCI
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
                name="destinoPacienteChk"
                id="destinoPacienteChkIntGuardia"
                value={"4"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkIntGuardia"
              >
                Internación de guardia
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="destinoPacienteChk"
                id="destinoPacienteChkShockRoom"
                value={"5"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="destinoPacienteChkShockRoom"
              >
                Shock Room
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoGasasChk"
                id="conteoGasasChkMorgue"
                value={"6"}
                {...register("destinoPacienteChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="conteoGasasChkMorgue">
                Morgue
              </label>
            </div>
          </div>
        </div>
        {errors.destinoPacienteChk && (
          <span className="text-danger">
            {errors.destinoPacienteChk.message}
          </span>
        )}
      </div>
    </section>
  );
};

export default ModuloDestino;
