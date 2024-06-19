import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloDrenajes = (props) => {

  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded drenaje ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"0"}
            id="flexCheckNungunDrenaje"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}            
          />
          <label className="form-check-label" htmlFor="flexCheckNungunDrenaje">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"1"}
            id="flexCheckJacksonPratt"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckJacksonPratt">
            Tipo Jackson Pratt
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"2"}
            id="flexCheckLatex"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckLatex">
            Latex
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"3"}
            id="flexCheckK225"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckK225">
            K 225
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"4"}
            id="flexCheckK227"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckK227">
            K 227
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"5"}
            id="flexCheckK10"
            {...register("DrenajeChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckK10">
            K 10
          </label>
        </div>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="drenajeOtros"
          placeholder="Otros"
          {...register("DrenajeOtros", {
            required: {
              value: true,
              message: "Debe seleccionar una de las opciones",
            },
          })}
        />
      </div>
      {errors.DrenajeChk  && (
              <span className="text-danger">{errors.DrenajeChk.message}</span>
            )}
    </section>
  );
};

export default ModuloDrenajes;
