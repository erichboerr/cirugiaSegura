import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloConteoInsumos = (props) => {
  
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded  conteoInsumos">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de instrumental fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoInstrumentalChk"
                id="conteoInstrumentalChkSi"
                value={"1"}
                {...register("conteoInstrumentalChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="conteoInstrumentalChkSi"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoInstrumentalChk"
                id="conteoInstrumentalChkNo"
                value={"0"}
                {...register("conteoInstrumentalChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="conteoInstrumentalChkNo"
              >
                No
              </label>
            </div>
            {errors.conteoInstrumentalChk && (
        <span className="text-danger">{errors.conteoInstrumentalChk.message}</span>
      )}
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de elementos corto punzantes fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoCortoPunzantesChk"
                id="conteoCortoPunzantesChkSi"
                value={"1"}
                {...register("conteoCortoPunzantesChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="conteoCortoPunzantesChkSi"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoCortoPunzantesChk"
                id="conteoCortoPunzantesChkNo"
                value={"0"}
                {...register("conteoCortoPunzantesChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label
                className="form-check-label"
                htmlFor="conteoCortoPunzantesChkNo"
              >
                No
              </label>
            </div>
            {errors.conteoCortoPunzantesChk && (
        <span className="text-danger">{errors.conteoCortoPunzantesChk.message}</span>
      )}
          </div>
        </div>
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El conteo de gasas utilizadas fue correcto?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoGasasChk"
                id="conteoGasasChkSi"
                value={"1"}
                {...register("conteoGasasChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="conteoGasasChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="conteoGasasChk"
                id="conteoGasasChkNo"
                value={"0"}
                {...register("conteoGasasChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="conteoGasasChkNo">
                No
              </label>
            </div>
            {errors.conteoGasasChk && (
        <span className="text-danger">{errors.conteoGasasChk.message}</span>
      )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloConteoInsumos;
