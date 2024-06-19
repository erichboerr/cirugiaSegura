import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloTomaMuestra = (props) => {
 
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
            <h5>Se tomaron muestras para cultivo?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="CultivoChk"
                id="CultivoChkSi"
                value={"1"}
                {...register("CultivoChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="CultivoChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="CultivoChk"
                id="CultivoChkNo"
                value={"0"}
                {...register("CultivoChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}                
              />
              <label className="form-check-label" htmlFor="CultivoChkNo">
                No
              </label>
            </div>
            {errors.CultivoChk && (
        <span className="text-danger">{errors.CultivoChk.message}</span>
      )}     
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Se enviaron piezas a anatomía patológica?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnatomiaChk"
                id="AnatomiaChkSi"
                value={"1"}
                {...register("AnatomiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              />
              <label className="form-check-label" htmlFor="AnatomiaChkSi">
                Si
              </label>              
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AnatomiaChk"
                id="AnatomiaChkNo"
                value={"0"}
                {...register("AnatomiaChk", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una de las opciones",
                  },
                })}
              /> 
                      
              <label className="form-check-label" htmlFor="AnatomiaChkNo">
                No
              </label>
            </div>
            {errors.AnatomiaChk && (
        <span className="text-danger">{errors.AnatomiaChk.message}</span>
      )}     
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuloTomaMuestra;
