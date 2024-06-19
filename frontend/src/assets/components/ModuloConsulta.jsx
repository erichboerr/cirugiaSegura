import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloConsulta = (props) => {

  const { register, formState: { errors } } = useContext(inputContext);

  return (
    <section
          className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded"
          id="SeccionConsulta"
        >
          <div className="title mb-2">
            <h2 className="text-center">Consulta</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>
                  El paciente ingresa con pulsera identificatoria colocada?
                </h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="PulseraChkSi"
                    type="radio"
                    name="PulseraChk"
                    value={"1"}
                    {...register("PulseraChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      validate: (value) => {
                        if (value === "0" || value === "1") {
                          return true;
                        } else {
                          return "Debe seleccionar un uno";
                        }
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="PulseraChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="PulseraChkNo"
                    type="radio"
                    name="PulseraChk"
                    value={0}
                    {...register("PulseraChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="PulseraChkNo">
                    No
                  </label>
                </div>
                {errors.PulseraChk && (
                  <span className="text-danger">
                    {errors.PulseraChk.message}
                  </span>
                )}
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene consentimiento informado firmado:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ConsentimientoChk"
                    id="ConsentimientoChkSi"
                    value={"1"}
                    {...register("ConsentimientoChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      validate: (value) => {
                        if (value === "0" || value === "1") {
                          return true;
                        } else {
                          return "Debe seleccionar un uno";
                        }
                      },
                    })}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ConsentimientoChkSi"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ConsentimientoChk"
                    id="ConsentimientoChkNo"
                    value={"0"}
                    {...register("ConsentimientoChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ConsentimientoChkNo"
                  >
                    No
                  </label>
                </div>
                {errors.ConsentimientoChk && (
                  <span className="text-danger">
                    {errors.ConsentimientoChk.message}
                  </span>
                )}
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene ayuno:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AyunoChk"
                    id="AyunoChkSi"
                    value={1}
                    {...register("AyunoChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="AyunoChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AyunoChk"
                    id="AyunoChkNo"
                    value={0}
                    {...register("AyunoChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="AyunoChkNo">
                    No
                  </label>
                </div>
                {errors.AyunoChk && (
                  <span className="text-danger">{errors.AyunoChk.message}</span>
                )}
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene marcapasos:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="MarcapasosChk"
                    id="MarcapasosChkSi"
                    value={1}
                    {...register("MarcapasosChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="MarcapasosChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="MarcapasosChk"
                    id="MarcapasosChkNo"
                    value={0}
                    {...register("MarcapasosChk", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  <label className="form-check-label" htmlFor="MarcapasosChkNo">
                    No
                  </label>
                </div>
                {errors.MarcapasosChk && (
                  <span className="text-danger">
                    {errors.MarcapasosChk.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
  );
};

export default ModuloConsulta;
