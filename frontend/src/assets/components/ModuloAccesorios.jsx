import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloAccesorios = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section
      className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded accesorios"
      id="SeccionAccesorios"
    >
      <div className="title mb-2">
        <h2 className="text-center">Accesorios</h2>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckNungunAccesorio"
            type="checkbox"
            value={"Ninguno"}            
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckNungunAccesorio">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckAros"
            type="checkbox"
            value={"Aros"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckAros">
            Aros
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckPiercing"
            type="checkbox"
            value={"Piercing"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckPiercing">
            Piercing
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckCollar"
            type="checkbox"
            value={"Collar"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckCollar">
            Collar
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckPulsera"
            type="checkbox"
            value={"Pulsera"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckPulsera">
            Pulsera
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckReloj"
            type="checkbox"
            value={"Reloj"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckReloj">
            Reloj
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckProtesis"
            type="checkbox"
            value={"Protesis dental removible"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckProtesis">
            Protesis dental removible
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckMovil"
            type="checkbox"
            value={"Telefono celular"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckMovil">
            Telefono celular
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckRopa"
            type="checkbox"
            value={"Ropa"}
            {...register("AccesoriosChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckRopa">
            Ropa
          </label>
        </div>
      </div>
      {errors.AccesoriosChk && (
        <span className="text-danger">{errors.AccesoriosChk.message}</span>
      )}
    </section>
  );
};

export default ModuloAccesorios;
