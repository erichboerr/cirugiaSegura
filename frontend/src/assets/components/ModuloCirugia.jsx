import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloCirugia = (props) => {

  const { register, formState: { errors } } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded cirugia">
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
                name="tipoCirugiaChk"
                id="tipoCirugiaChkProgramada"
                value={0}
                {...register("TipoCirugiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })} 
              />
              <label className="form-check-label" htmlFor="tipoCirugiaChkProgramada">
                Programada
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tipoCirugiaChk"
                id="tipoCirugiaChkUrgencia"
                value={1}
                {...register("TipoCirugiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })} 
              />
              <label className="form-check-label" htmlFor="tipoCirugiaChkUrgencia">
                Urgencia
              </label>
            </div>
            {errors.TipoCirugiaChk && (
        <span className="text-danger">{errors.TipoCirugiaChk.message}</span>
      )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloCirugia;
