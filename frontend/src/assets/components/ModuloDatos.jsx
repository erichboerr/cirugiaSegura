import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";


const ModuloDatos = (props) => {
  
 const { register, formState: { errors } } = useContext(inputContext);

  return (
    <section
          className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded DatosPaciente"
          
        >
          <div className="title mb-2">
            <h2 className="text-center">Datos del Paciente</h2>
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="inputHHCC" className="form-label">
              Historia Clinica:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputHHCC"
              {...register("hhcc", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Este campo solo acepta valores numericos",
                },
              })}
            />
            {errors.hhcc && (
              <span className="text-danger">{errors.hhcc.message}</span>
            )}
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="inputDNI" className="form-label">
              DNI:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDNI"
              {...register("dni", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Este campo solo acepta valores numericos",
                },
              })}
            />
            {errors.dni && (
              <span className="text-danger">{errors.dni.message}</span>
            )}
          </div>
          <div className="col-md-12 mb-4">
            <label htmlFor="inputName" className="form-label">
              Nombre y Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]+[\s]*)+$/,
                  message: "Este campo solo acepta valores alfabeticos",
                },
              })}
            />
            {errors.nombre && (
              <span className="text-danger">{errors.nombre.message}</span>
            )}
          </div>
          <div className="col-md-12 mb-2">
            <label htmlFor="inputName" className="form-label">
              Sexo:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioMale"
                name="flexRadioSex"
                value={"0"}
                {...register("sexo", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  validate: (value) => {
                    if (value === "0" || value === "1" || value === "2") {
                      return true;
                    } else {
                      return "Debe seleccionar un sexo";
                    }
                  },
                })}
              />
              <label className="form-check-label" htmlFor="flexRadioMale">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioFemale"
                name="flexRadioSex"
                value={"1"}
                {...register("sexo")}
              />
              <label className="form-check-label" htmlFor="flexRadioFemale">
                Femenino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioOther"
                name="flexRadioSex"
                value={"2"}
                {...register("sexo")}
              />
              <label className="form-check-label" htmlFor="flexRadioOther">
                Otros
              </label>
            </div>
            {errors.sexo && (
              <span className="text-danger">{errors.sexo.message}</span>
            )}
          </div>
        </section>
  );
};

export default ModuloDatos;
