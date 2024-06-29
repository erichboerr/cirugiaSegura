import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloApoyo = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded apoyo ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckNungunApoyo"
            type="checkbox"
            value={"Ninguno"}
            {...register("ApoyoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckNungunApoyo">
            Ninguno
          </label>
        </div>
      </div>

      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckradiologia"
            type="checkbox"
            value={"Técnico de radiología"}
            {...register("ApoyoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckradiologia">
            Técnico de radiología
          </label>
        </div>
      </div>

      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckOrtopedia"
            type="checkbox"
            value={"Técnico de ortopedia"}
            {...register("ApoyoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckOrtopedia">
            Técnico de ortopedia
          </label>
        </div>
      </div>

      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckAnatomia"
            type="checkbox"
            value={"Anatomía patológica por congelación"}
            {...register("ApoyoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckAnatomia">
            Anatomía patológica por congelación
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckOtro"
            type="checkbox"
            value={"Otros"}
            {...register("ApoyoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckOtro">
            Otros
          </label>
        </div>
      </div>
      <div className="mt-2">
        <input
          type="text"
          className="form-control form-control-sm"
          id="apoyoOtros"
          placeholder="Especifique" 
          {...register("ApoyoOtros", {
            required: {
              value: true,
              message: "Debe seleccionar una de las opciones",
            },
          })}
        />
      </div>
      {errors.ApoyoChk && (
        <span className="text-danger">{errors.ApoyoChk.message}</span>
      )}
    </section>
  );
};

export default ModuloApoyo;
