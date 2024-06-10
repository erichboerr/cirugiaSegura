import React from "react";

const ModuloConsulta2 = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El paciente tiene condiciones de higiene adecuada:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IgieneChk"
                id="IgieneChkSi"
                value={1}                
              />
              <label className="form-check-label" htmlFor="IgieneChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IgieneChk"
                id="IgieneChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="IgieneChkNo">
                No
              </label>
            </div>
          </div>
        </div>     

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Historia clinica en Papel:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="HHCCChk"
                id="HHCCChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="HHCCChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="HHCCChk"
                id="HHCCChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="HHCCChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>Estudios Complementarios:</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="EstudiosChk"
                id="EstudiosChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="EstudiosChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="EstudiosChk"
                id="EstudiosChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="EstudiosChkNo">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="card text-center col-md-3">
          <div className="card-body">
            <h5>El Paciente es alérgico a alguna medicación?</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AlergiaChk"
                id="AlergiaChkSi"
                value={1}
              />
              <label className="form-check-label" htmlFor="AlergiaChkSi">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="AlergiaChk"
                id="AlergiaChkNo"
                value={0}
              />
              <label className="form-check-label" htmlFor="AlergiaChkNo">
                No
              </label>
            </div>
            <div className="mt-3">              
              <input
                type="text"
                className="form-control form-control-sm"
                id="aQue"
                placeholder="A Que?"
              />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ModuloConsulta2;
