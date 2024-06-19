import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloEquipamiento = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckNungunEquipamiento"
            type="checkbox"
            value={"0"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckNunguno">
            Ninguno
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckElectrobisturí"
            type="checkbox"
            value={"1"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckElectrobisturí">
            Electrobisturí
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckLaparoCO2"
            type="checkbox"
            value={"2"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckLaparoCO2">
            Consola de laparascopía con CO2
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckLaparo"
            type="checkbox"
            value={"3"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckLaparo">
            Consola de laparascopía sin CO2
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckHarmonic"
            type="checkbox"
            value={"4"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckHarmonic">
            Consola de energía Harmonic
          </label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckGammaProve"
            type="checkbox"
            value={"5"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckGammaProve">
            Gamma Probe
          </label>
        </div>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="Otros"
          placeholder="Otros"
          {...register("EquipamientoOtros", {
            required: {
              value: true,
              message: "Debe seleccionar una de las opciones",
            },
          })}
        />
      </div>
      {errors.EquipamientoChk && (
        <span className="text-danger">{errors.AccesoriosChk.message}</span>
      )}
    </section>
  );
};

export default ModuloEquipamiento;
