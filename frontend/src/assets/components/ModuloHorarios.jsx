import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";
const ModuloHorarios = (props) => {

  const { register, formState: { errors } } = useContext(inputContext);
  
  return (
    <section
      className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded"
      id="SeccionHorarios"
    >
      <div className="title mb-2">
        <h2 className="text-center">Horarios</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Area Quirúrgica</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInit" className="form-label ">
              Ingreso:{" "}
              {errors.AreaQXInit && (
                <span className="text-danger">
                  {" ("}
                  {errors.AreaQXInit.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInit"
              name="AreaQXInit"
              {...register("AreaQXInit", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />

            <label htmlFor="inputOut" className="form-label">
              Egreso:{" "}
              {errors.AreaQXOut && (
                <span className="text-danger">
                  {" ("}
                  {errors.AreaQXOut.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputOut"
              name="AreaQXOut"
              {...register("AreaQXOut", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
          </div>
        </div>
        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Quirófano</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInitQX" className="form-label">
              Ingreso:{" "}
              {errors.QuirofanoInit && (
                <span className="text-danger">
                  {" ("}
                  {errors.QuirofanoInit.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInitQX"
              name="QuirofanoInit"
              {...register("QuirofanoInit", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
            <label htmlFor="inputOutQX" className="form-label">
              Egreso:{" "}
              {errors.QuirofanoOut && (
                <span className="text-danger">
                  {" ("}
                  {errors.QuirofanoOut.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputOutQX"
              name="QuirofanoOut"
              {...register("QuirofanoOut", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-header">
            <h4>Cirugía</h4>
          </div>
          <div className="card-body">
            <label htmlFor="inputInitQX" className="form-label">
              Comienzo:{" "}
              {errors.CirugiaInit && (
                <span className="text-danger">
                  {" ("}
                  {errors.CirugiaInit.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center"
              id="inputInitQX"
              name="CirugiaInit"
              {...register("CirugiaInit", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
            <label htmlFor="inputOutQX" className="form-label">
              Finalización:{" "}
              {errors.CirugiaOut && (
                <span className="text-danger">
                  {" ("}
                  {errors.CirugiaOut.message}
                  {") "}
                </span>
              )}
            </label>
            <input
              type="time"
              className="form-control text-center mb-2"
              id="inputOutQX"
              name="CirugiaOut"
              {...register("CirugiaOut", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloHorarios;
