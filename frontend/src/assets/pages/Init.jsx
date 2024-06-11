import { React, useState } from "react";

const Init = () => {
  const [inputValues, setInputValues] = useState({
    hhcc: "",
    dni: "",
    nombre: "",
    sexo: "",
    areaQuirurgicaInit: "",
    areaQuirurgicaOut: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  return (
    <section>
      <form className="row g-3 mx-3 mt-3">
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded">
          <div className="title mb-2">
            <h2 className="text-center">Datos del Paciente</h2>
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="inputHHCC" className="form-label">
              Historia Clinica:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputHHCC"
              name="hhcc"
              value={inputValues.hhcc}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 ">
            <label htmlFor="inputDNI" className="form-label">
              DNI:
            </label>
            <input
              className="form-control"
              id="inputDNI"
              type="text"
              name="dni"
              value={inputValues.dni}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12 ">
            <label htmlFor="inputName" className="form-label">
              Nombre y Apellido:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="nombre"
              value={inputValues.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="flexRadioMale" className="form-label">
              Sexo:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioMale"
                name="sexo"
                value={"masculino"}
                onClick={handleInputChange}
              />
              <label className="form-check-label" htmlFor="flexRadioMale">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioFemale"
                name="sexo"
                value={"femenino"}
                onClick={handleInputChange}
              />
              <label className="form-check-label" htmlFor="flexRadioFemale">
                Femenino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioOther"
                name="sexo"
                value={"otros"}
                onClick={handleInputChange}
              />
              <label className="form-check-label" htmlFor="flexRadioOther">
                Otros
              </label>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Horarios</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-header">
                <h4>Area Quirúrgica</h4>
              </div>
              <div className="card-body">
                <label htmlFor="inputInit" className="form-label ">
                  Ingreso:
                </label>
                <input
                  type="time"
                  className="form-control text-center"
                  id="inputInit"
                  name="areaQuirurgicaInit"
                  value={inputValues.areaQuirurgicaInit}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputOut" className="form-label">
                  Egreso:
                </label>
                <input
                  type="time"
                  className="form-control text-center"
                  id="inputOut"
                  name="areaQuirurgicaOut"
                  value={inputValues.areaQuirurgicaOut}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-header">
                <h4>Quirófano</h4>
              </div>
              <div className="card-body">
                <label htmlFor="inputInitQX" className="form-label">
                  Ingreso:
                </label>
                <input
                  type="time"
                  className="form-control text-center"
                  id="inputInitQX"
                  name="quirofanoInit"
                  value={inputValues.quirofanoInit}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputOutQX" className="form-label">
                  Egreso:
                </label>
                <input
                  type="time"
                  className="form-control text-center"
                  id="inputOutQX"
                  name="quirofanoOut"
                  value={inputValues.quirofanoOut}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-header">
                <h4>Cirugía</h4>
              </div>
              <div className="card-body">
                <label htmlFor="inputInitQX" className="form-label">
                  Comienzo:
                </label>
                <input
                  type="time"
                  className="form-control text-center"
                  id="inputInitQX"
                  name="cirugiaInit"
                  value={inputValues.cirugiaInit}
                  onChange={handleInputChange}
                />
                <label htmlFor="inputOutQX" className="form-label">
                  Finalización:
                </label>
                <input
                  type="time"
                  className="form-control text-center mb-2"
                  id="inputOutQX"
                  name="cirugiaOut"
                  value={inputValues.cirugiaOut}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Consulta</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>
                  El paciente ingresa con pulsera identificatoria colocada?
                </h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PulseraChk"
                    id="PulseraChkSi"
                    value={1}
                  />
                  <label className="form-check-label" htmlFor="PulseraChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PulseraChk"
                    id="PulseraChkNo"
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="PulseraChkNo">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene consentimiento informado firmado:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ConsentimientoChk"
                    id="ConsentimientoChkSi"
                    value={1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ConsentimientoChkSi"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ConsentimientoChk"
                    id="ConsentimientoChkNo"
                    value={0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ConsentimientoChkNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene ayuno:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AyunoChk"
                    id="AyunoChkSi"
                    value={1}
                  />
                  <label className="form-check-label" htmlFor="AyunoChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AyunoChk"
                    id="AyunoChkNo"
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="AyunoChkNo">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El paciente tiene marcapasos:</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="MarcapasosChk"
                    id="MarcapasosChkSi"
                    value={1}
                  />
                  <label className="form-check-label" htmlFor="MarcapasosChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="MarcapasosChk"
                    id="MarcapasosChkNo"
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="MarcapasosChkNo">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">El paciente tiene Accesorios?</h2>
          </div>
          <div className="col-md-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNunguno1"
              />
              <label className="form-check-label" htmlFor="flexCheckNunguno1">
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
                id="flexCheckAros"
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
                type="checkbox"
                value=""
                id="flexCheckPiercing"
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
                type="checkbox"
                value=""
                id="flexCheckCollar"
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
                type="checkbox"
                value=""
                id="flexCheckPulsera"
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
                type="checkbox"
                value=""
                id="flexCheckReloj"
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
                type="checkbox"
                value=""
                id="flexCheckProtesis"
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
                type="checkbox"
                value=""
                id="flexCheckMovil"
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
                type="checkbox"
                value=""
                id="flexCheckRopa"
              />
              <label className="form-check-label" htmlFor="flexCheckRopa">
                Ropa
              </label>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Consulta 2</h2>
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
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">
              El procedimiento requiere alguno de los siguientes equipos?
            </h2>
          </div>
          <div className="col-md-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNunguno2"
              />
              <label className="form-check-label" htmlFor="flexCheckNunguno2">
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
              <label
                className="form-check-label"
                htmlFor="flexCheckElectrobisturí"
              >
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
              id="Otros1"
              placeholder="Otros"
            />
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">
              El procedimiento requiere de algunos de los siguientes servicios
              de apoyo:
            </h2>
          </div>
          <div className="col-md-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNunguno3"
              />
              <label className="form-check-label" htmlFor="flexCheckNunguno3">
                Ninguno
              </label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckradiologia"
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
                type="checkbox"
                value=""
                id="flexCheckOrtopedia"
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
                type="checkbox"
                value=""
                id="flexCheckAnatomia"
              />
              <label className="form-check-label" htmlFor="flexCheckAnatomia">
                Anatomía patológica por congelación
              </label>
            </div>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control form-control-sm"
              id="Otros2"
              placeholder="Otros"
            />
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Tipo de Cirugía:</h2>
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="tipoCirugiaChkProgramada"
                  >
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
                  />
                  <label
                    className="form-check-label"
                    htmlFor="tipoCirugiaChkUrgencia"
                  >
                    Urgencia
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Procedencia del Paciente:</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkAmbulatoria"
                    value={"ambulatoria"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkAmbulatoria"
                  >
                    Ambulatoria
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkIntGral"
                    value={"Sala de internación general"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkIntGral"
                  >
                    Sala de internación general
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkIntGuardia"
                    value={"Sala de internación de guardia"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkIntGuardia"
                  >
                    Sala de internación guardia
                  </label>
                </div>
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkShockRoom"
                    value={"Shock room"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkShockRoom"
                  >
                    Shock room
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkIntIntensivos"
                    value={"Unidad de cuidados intensivos"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkIntIntensivos"
                  >
                    Unidad de cuidados intensivos
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ProcedenciaChk"
                    id="ProcedenciaChkIntIntermedios"
                    value={"Unidad de cuidados intermedios"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ProcedenciaChkIntIntermedios"
                  >
                    Unidad de cuidados intermedios
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Tipo de anestesia utilizada:</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AnestesiaChk"
                    id="AnestesiaChkGeneral"
                    value={"General"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="AnestesiaChkGeneral"
                  >
                    General
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AnestesiaChk"
                    id="AnestesiaChkBloqueo"
                    value={"Bloqueo"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="AnestesiaChkBloqueo"
                  >
                    Bloqueo
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AnestesiaChk"
                    id="AnestesiaChkSedación"
                    value={"Sedación"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="AnestesiaChkSedación"
                  >
                    Sala de internación guardia
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="AnestesiaChk"
                    id="AnestesiaChkLocal"
                    value={"Local"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="AnestesiaChkLocal"
                  >
                    Local
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Quirófano Asignado:</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkA"
                    value={"A"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkA">
                    A
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkB"
                    value={"B"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkB">
                    B
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkC"
                    value={"C"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkC">
                    C
                  </label>
                </div>
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkD"
                    value={"D"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkD">
                    D
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkE"
                    value={"E"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkE">
                    E
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkF"
                    value={"F"}
                  />
                  <label className="form-check-label" htmlFor="QuirofanoChkF">
                    F
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="QuirofanoChk"
                    id="QuirofanoChkMaternidad"
                    value={"Maternidad"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="QuirofanoChkMaternidad"
                  >
                    Maternidad
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Consulta 3</h2>
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
                    value={1}
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
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="CultivoChkNo">
                    No
                  </label>
                </div>
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
                    value={1}
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
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="AnatomiaChkNo">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">
              Se colocó alguno de los siguientes implantes:
            </h2>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNunguno4"
              />
              <label className="form-check-label" htmlFor="flexCheckNunguno4">
                Ninguno
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckMalla"
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
                value=""
                id="flexCheckPrótesisMama"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckPrótesisMama"
              >
                Prótesis de mama
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckOsteosintesis"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckOsteosintesis"
              >
                Material de osteosintesis (placa y tornillos) traumatología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckOsteosintesis2"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckOsteosintesis2"
              >
                Material de osteosintesis tornillos traumatología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckOsteosintesis3"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckOsteosintesis3"
              >
                Material de osteosintesis cirugía maxilofacial
              </label>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckCadera"
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
                value=""
                id="flexCheckParcialCadera"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckParcialCadera"
              >
                Prótesis parcial de cadera
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckPrótesisRodilla"
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
                value=""
                id="flexCheckClavoEnfomedular"
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
                value=""
                id="flexCheckDhs"
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
                value=""
                id="flexCheckSuturasMecanicas"
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
                value=""
                id="flexCheckK108"
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
              id="Otros3"
              placeholder="Otros"
            />
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">
              Se colocó alguno de los siguientes drenajes:
            </h2>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNunguno5"
              />
              <label className="form-check-label" htmlFor="flexCheckNunguno5">
                Ninguno
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckJacksonPratt"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckJacksonPratt"
              >
                Tipo Jackson Pratt
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckLatex"
              />
              <label className="form-check-label" htmlFor="flexCheckLatex">
                Latex
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckK225"
              />
              <label className="form-check-label" htmlFor="flexCheckK225">
                K 225
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckK227"
              />
              <label className="form-check-label" htmlFor="flexCheckK227">
                K 227
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckK10"
              />
              <label className="form-check-label" htmlFor="flexCheckK10">
                K 10
              </label>
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              className="form-control form-control-sm"
              id="Otros4"
              placeholder="Otros"
            />
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Conteo de Insumos Utilizados</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El conteo de instrumental fue correcto?</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoInstrumentalChk"
                    id="conteoInstrumentalChkSi"
                    value={1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoInstrumentalChkSi"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoInstrumentalChk"
                    id="conteoInstrumentalChkNo"
                    value={0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoInstrumentalChkNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El conteo de elementos corto punzantes fue correcto?</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoCortoPunzantesChk"
                    id="conteoCortoPunzantesChkSi"
                    value={1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoCortoPunzantesChkSi"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoCortoPunzantesChk"
                    id="conteoCortoPunzantesChkNo"
                    value={0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoCortoPunzantesChkNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>El conteo de gasas utilizadas fue correcto?</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoGasasChk"
                    id="conteoGasasChkSi"
                    value={1}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoGasasChkSi"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="conteoGasasChk"
                    id="conteoGasasChkNo"
                    value={0}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="conteoGasasChkNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Pulsera</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="card text-center col-md-3">
              <div className="card-body">
                <h5>
                  El paciente se retira con pulsera identificatoria colocada:
                </h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PulseraOutChk"
                    id="PulseraOutChkSi"
                    value={1}
                  />
                  <label className="form-check-label" htmlFor="PulseraOutChkSi">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="PulseraOutChk"
                    id="PulseraOutChkNo"
                    value={0}
                  />
                  <label className="form-check-label" htmlFor="PulseraOutChkNo">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Servicio que interviene:</h2>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckCirugiaGeneral"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckCirugiaGeneral"
              >
                Cirugia General
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckTraumatología"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckTraumatología"
              >
                Traumatología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckMaxilofacial"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckMaxilofacial"
              >
                Maxilofacial
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckGinecología"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckGinecología"
              >
                Ginecología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckUrología"
              />
              <label className="form-check-label" htmlFor="flexCheckUrología">
                Urología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckOftalmología"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckOftalmología"
              >
                Oftalmología
              </label>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckOtorrino"
              />
              <label className="form-check-label" htmlFor="flexCheckOtorrino">
                Otorrinolaringología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckGastroenterología"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckGastroenterología"
              >
                Gastroenterología
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckMaternidad"
              />
              <label className="form-check-label" htmlFor="flexCheckMaternidad">
                Maternidad
              </label>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Destino del paciente:</h2>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckAmbulatorio"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckAmbulatorio"
              >
                Ambulatorio
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckInternaciónGeneral"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckInternaciónGeneral"
              >
                Sala de internación general
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckUTI"
              />
              <label className="form-check-label" htmlFor="flexCheckUTI">
                Unidad de cuidados intensivos
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckUCI"
              />
              <label className="form-check-label" htmlFor="flexCheckUCI">
                Unidad de cuidados intermedios
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckInternacionGuardia"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckInternacionGuardia"
              >
                Internación de guardia
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckShockRoom"
              />
              <label className="form-check-label" htmlFor="flexCheckShockRoom">
                Shock Room
              </label>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckMorgue"
              />
              <label className="form-check-label" htmlFor="flexCheckMorgue">
                Morgue
              </label>
            </div>
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">
              La cirugía fue suspendida? Indique la causa:
            </h2>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckAyuno"
              />
              <label className="form-check-label" htmlFor="flexCheckAyuno">
                Falta de ayuno
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckFaltaSangre"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckFaltaSangre"
              >
                Falta de sangre
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckCamaUCI"
              />
              <label className="form-check-label" htmlFor="flexCheckCamaUCI">
                Falta de cama en UCI
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckCondicionesInstrumental"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckCondicionesInstrumental"
              >
                Condiciones del instrumental de colocación e implante del
                material de ortopedia{" "}
              </label>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckNinguno6"
              />
              <label className="form-check-label" htmlFor="flexCheckNinguno6">
                No
              </label>
            </div>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control form-control-sm"
              id="Otros5"
              placeholder="Otros"
            />
          </div>
        </section>
        <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
          <div className="title mb-2">
            <h2 className="text-center">Que cirugía se realizó? Especifique</h2>
          </div>

          <div className="form-floating">
            <textarea className="form-control" id="floatingTextarea"></textarea>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Init;
