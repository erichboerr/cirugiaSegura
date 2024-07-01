import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloEquipamiento = (props) => {
  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded equipamiento ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckNungunEquipamiento"
            type="checkbox"
            value={"Ninguno"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckNungunEquipamiento">
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
            value={"Electrobisturí"}
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
            value={"Consola de laparascopía con CO2"}
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
            value={"Consola de laparascopía sin CO2"}
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
            value={"Consola de energía Harmonic"}
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
            value={"Gamma Probe"}
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
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            id="flexCheckOtros"
            type="checkbox"
            value={"Otros"}
            {...register("EquipamientoChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}
          />
          <label className="form-check-label" htmlFor="flexCheckOtros">
            Otros
          </label>
          
        </div>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="equipamientoOtros"
          placeholder="Indique cual?"
          {...register("EquipamientoOtros")}
        />
      </div>

      {errors.EquipamientoChk && (
        <span className="text-danger">{errors.EquipamientoChk.message}</span>
      )}
    </section>
  );
};

export default ModuloEquipamiento;
