import React from "react";

const ModuloDatos = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded" >
     <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="col-md-6 mb-2">
        <label htmlFor="inputHHCC" className="form-label">
          Historia Clinica:
        </label>
        <input type="text" className="form-control" id="inputHHCC" required/>
      </div>
      <div className="col-md-6 ">
        <label htmlFor="inputDNI" className="form-label">
          DNI:
        </label>
        <input type="text" className="form-control" id="inputDNI" required/>
      </div>
      <div className="col-md-12 ">
        <label htmlFor="inputName" className="form-label">
          Nombre y Apellido:
        </label>
        <input type="text" className="form-control" id="inputName" required/>
      </div>
      <div>
      <label htmlFor="inputName" className="form-label">
          Sexo:
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioSex"
            id="flexRadioMale"
            
          />
          <label className="form-check-label" htmlFor="flexRadioMale">
            Masculino
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioSex"
            id="flexRadioFemale"
            
          />
          <label className="form-check-label" htmlFor="flexRadioFemale">
            Femenino
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioSex"
            id="flexRadioOther"
            
          />
          <label className="form-check-label" htmlFor="flexRadioOther">
            Otros
          </label>
        </div>
      </div>
    </section>
  );
};

export default ModuloDatos;
