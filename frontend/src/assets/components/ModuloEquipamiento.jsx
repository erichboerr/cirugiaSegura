import React from "react";

const ModuloEquipamiento = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckNunguno"      
                  
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
            type="checkbox"
            value=""
            id="flexCheckElectrobisturí"
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
            type="checkbox"
            value=""
            id="flexCheckLaparoCO2"
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
            type="checkbox"
            value=""
            id="flexCheckLaparo"
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
            type="checkbox"
            value=""
            id="flexCheckHarmonic"
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
            type="checkbox"
            value=""
            id="flexCheckGammaProve"
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
              />
            </div>
    </section>
  );
};

export default ModuloEquipamiento;
