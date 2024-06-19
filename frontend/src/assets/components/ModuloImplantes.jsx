import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloImplantes = (props) => {

  const {
    register,
    formState: { errors },
  } = useContext(inputContext);
  
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded implantes ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"0"}
            id="flexCheckNungunImplante"  
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })}          
          />
          <label className="form-check-label" htmlFor="flexCheckNungunImplante">
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
            id="flexCheckMalla"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckMalla">
            Malla
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"2"}
            id="flexCheckPrótesisMama"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckPrótesisMama">
            Prótesis de mama
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"3"}
            id="flexCheckOsteosintesis"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis">
            Material de osteosintesis (placa y tornillos) traumatología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"4"}
            id="flexCheckOsteosintesis2"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis2">
            Material de osteosintesis tornillos traumatología
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"5"}
            id="flexCheckOsteosintesis3"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckOsteosintesis3">
            Material de osteosintesis cirugía maxilofacial
          </label>
        </div>
      </div>

      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"6"}
            id="flexCheckCadera"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckCadera">
            Prótesis total de cadera
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"7"}
            id="flexCheckParcialCadera"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckParcialCadera">
            Prótesis parcial de cadera
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"8"}
            id="flexCheckPrótesisRodilla"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckPrótesisRodilla"
          >
            Prótesis de rodilla
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"9"}
            id="flexCheckClavoEnfomedular"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckClavoEnfomedular"
          >
            Clavo enfomedular
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"10"}
            id="flexCheckDhs"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckDhs">
            Dhs
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"11"}
            id="flexCheckSuturasMecanicas"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckSuturasMecanicas"
          >
            Suturas mecánicas
          </label>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={"12"}
            id="flexCheckK108"
            {...register("ImplantesChk", {
              required: {
                value: true,
                message: "Debe seleccionar una de las opciones",
              },
            })} 
          />
          <label className="form-check-label" htmlFor="flexCheckK108">
            K 108
          </label>
        </div>
      </div>

      <div className="mt-3">
        <input
          type="text"
          className="form-control form-control-sm"
          id="implantesOtros"
          placeholder="Otros"
          {...register("ImplantesOtros", {
            required: {
              value: true,
              message: "Debe seleccionar una de las opciones",
            },
          })} 
        />
      </div>
      {errors.ImplantesChk && (
        <span className="text-danger">{errors.ImplantesChk.message}</span>
      )}
    </section>
  );
};

export default ModuloImplantes;
