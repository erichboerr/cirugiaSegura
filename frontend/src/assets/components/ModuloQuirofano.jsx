import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloQuirofano = (props) => {
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
        <div className="card text-center col-md-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkA"
                value={"0"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkA">
                A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkB"
                value={"1"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkB">
                B
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkC"
                value={"2"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkC">
                C
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
                name="QuirofanoChk"
                id="QuirofanoChkD"
                value={"3"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkD">
                D
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkE"
                value={"4"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkE">
                E
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkF"
                value={"5"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkF">
                F
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkMaternidad"
                value={"6"}
                {...register("QuirofanoChk", {
                  required: {
                    value: true,
                    message: "Seleccione una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="QuirofanoChkMaternidad"
              >
                Maternidad
              </label>
            </div>
          </div>
        </div>
        {errors.QuirofanoChk && (
          <span className="text-danger">{errors.QuirofanoChk.message}</span>
        )}
      </div>
    </section>
  );
};

export default ModuloQuirofano;
