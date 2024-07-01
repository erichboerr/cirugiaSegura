import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModuloDatos from "../components/ModuloDatos";
import ModuloHorarios from "../components/ModuloHorarios";
import ModuloConsulta from "../components/ModuloConsulta";
import ModuloAccesorios from "../components/ModuloAccesorios";
import ModuloConsulta2 from "../components/ModuloConsulta2";
import ModuloEquipamiento from "../components/ModuloEquipamiento";
import ModuloApoyo from "../components/ModuloApoyo";
/*import ModuloCirugia from "../components/ModuloCirugia";
import ModuloProcedencia from "../components/ModuloProcedencia";
import ModuloAnestesia from "../components/ModuloAnestesia";
import ModuloQuirofano from "../components/ModuloQuirofano";
import ModuloTomaMuestras from "../components/ModuloTomaMuestras";
import ModuloImplantes from "../components/ModuloImplantes";
import ModuloDrenajes from "../components/ModuloDrenajes";
import ModuloConteoInsumos from "../components/ModuloConteoInsumos";
import ModuloPulsera from "../components/ModuloPulsera";
import ModuloServicio from "../components/ModuloServicio";
import ModuloDestino from "../components/ModuloDestino";
import ModuloSuspencion from "../components/ModuloSuspension";
import ModuloCirugiaRealizada from "../components/ModuloCirugiaRealizada";*/

const Inicio = () => {
  const { handleSubmit, watch } = useContext(inputContext);
  const navegate = useNavigate();
  const data = { ...watch };
  console.log(data);
  const onsubmit = async (data) => {
    try {      
      console.log(data);
       axios
        .post("http://localhost:5050", data);    
      alert("formulario agregado correctamente");
       navegate(0);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al enviar los datos");
    }
  };

  return (
    <section>
      <h1 className="text-center mt-3">CIRUGÍA SEGURA</h1>
      <form className="row g-3 mx-3 mt-3" >
        <ModuloDatos titulo="Datos del Paciente" />
        <ModuloHorarios titulo="Horarios" />
        <ModuloConsulta titulo="Consulta" />
        <ModuloAccesorios titulo="El paciente tiene Accesorios?" />
        <ModuloConsulta2 titulo="Consulta 2" />
        <ModuloEquipamiento titulo="El procedimiento requiere alguno de los siguientes equipos?" />
        <ModuloApoyo titulo="El procedimiento requiere de algunos de los siguientes servicios de apoyo:" />
        {/*<ModuloCirugia titulo="Tipo de Cirugía:" />
        <ModuloProcedencia titulo="Procedencia del Paciente:" />
        <ModuloAnestesia titulo="Tipo de anestesia utilizada:" />
        <ModuloQuirofano titulo="Quirófano Asignado:" />
        <ModuloTomaMuestras titulo="Toma de Muestras" />
        <ModuloImplantes titulo="Se colocó alguno de los siguientes implantes:" />
        <ModuloDrenajes titulo="Se colocó alguno de los siguientes drenajes:" />
        <ModuloConteoInsumos titulo="Conteo de Insumos Utilizados" />
        <ModuloPulsera titulo="Pulsera" />
        <ModuloServicio titulo="Servicio que interviene:" />
        <ModuloDestino titulo="Destino del paciente:" />
        <ModuloSuspencion titulo="La cirugía fue suspendida? Indique la causa:" />
        <ModuloCirugiaRealizada titulo="Que cirugía se realizó? Especifique" />*/}
        <div className="col-12 mx-3">
          <button className="btn btn-primary" type="submit"onClick={handleSubmit(onsubmit)}>
            Enviar
          </button>
        </div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </section>
  );
};

export default Inicio;
