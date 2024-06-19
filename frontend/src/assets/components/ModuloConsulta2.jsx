import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloConsulta2 = (props) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded consulta2 ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente tiene condiciones de higiene adecuada:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IgieneChk"
                id="IgieneChkSi"
                value={"1"}
                {...register("IgieneChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="IgieneChkSi">
                Si
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IgieneChk"
                id="IgieneChkNo"
                value={"0"}
                {...register("IgieneChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="IgieneChkNo">
                No
              </label>
            </div>
            {errors.IgieneChk && (
              <span className="text-danger">{errors.IgieneChk.message}</span>
            )}
          </div>
        </div>
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Historia clinica en Papel:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="HHCCCPapelChk"
                id="HHCCChkSi"
                value={"1"}
                {...register("HHCCCPapelChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="HHCCChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="HHCCCPapelChk"
                id="HHCCChkNo"
                value={"0"}
                {...register("HHCCCPapelChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="HHCCChkNo">
                No
              </label>
            </div>
            {errors.HHCCCPapelChk && (
              <span className="text-danger">
                {errors.HHCCCPapelChk.message}
              </span>
            )}
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Estudios Complementarios:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="EstudiosComplementariosChk"
                id="EstudiosChkSi"
                value={"1"}
                {...register("EstudiosComplementariosChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="EstudiosChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="EstudiosComplementariosChk"
                id="EstudiosChkNo"
                value={"0"}
                {...register("EstudiosComplementariosChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="EstudiosChkNo">
                No
              </label>
            </div>
            {errors.EstudiosComplementariosChk && (
              <span className="text-danger">
                {errors.EstudiosComplementariosChk.message}
              </span>
            )}
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El Paciente es alérgico a alguna medicación?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AlergiaChk"
                id="AlergiaChkSi"
                value={"1"}
                {...register("AlergiaChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="AlergiaChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AlergiaChk"
                id="AlergiaChkNo"
                value={"0"}
                {...register("AlergiaChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
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
              <label className="form-check-label" htmlFor="AlergiaChkNo">
                No
              </label>
            </div>
            {errors.AlergiaChk && (
              <span className="text-danger">{errors.AlergiaChk.message}</span>
            )}

            {watch("AlergiaChk") === "1" && (
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="aQue"
                  placeholder="A Que?"
                  {...register("AlergiaChkAQue", {
                    required: {
                      value: true,
                      message: "Seleccione una de las opciones",
                    },
                  })}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloConsulta2;
