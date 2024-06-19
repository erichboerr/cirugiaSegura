import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloSuspencion = (props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"0"}
            id="flexCheckNingunaSuspension"
            {...register("SuspensionChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckNingunaSuspension"
          >
            No
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"1"}
            id="flexCheckAyuno"
            {...register("SuspensionChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckAyuno">
            Falta de ayuno
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="2"
            id="flexCheckFaltaSangre"
            {...register("SuspensionChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckFaltaSangre">
            Falta de sangre
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"3"}
            id="flexCheckCamaUCI"
            {...register("SuspensionChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckCamaUCI">
            Falta de cama en UCI
          </label>
        </div>
      </div>
      <div className="col-md-8 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"4"}
            id="flexCheckCondicionesInstrumental"
            {...register("SuspensionChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckCondicionesInstrumental"
          >
            Condiciones del instrumental de colocación e implante del material
            de ortopedia
          </label>
        </div>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="Otros"
          placeholder="Otros"          
          {...register("SuspensionOtros")}
        />
      </div>
      {errors.SuspensionChk && (
        <span className="text-danger">{errors.SuspensionChk.message}</span>
      )}
    </section>
  );
};

export default ModuloSuspencion;
