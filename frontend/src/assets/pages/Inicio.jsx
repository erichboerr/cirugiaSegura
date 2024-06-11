import React from "react";
import ModuloDatos from "../components/ModuloDatos";
import ModuloHorarios from "../components/ModuloHorarios";
import ModuloConsulta from "../components/ModuloConsulta";
import ModuloAccesorios from "../components/ModuloAccesorios";
import ModuloConsulta2 from "../components/ModuloConsulta2";
import ModuloEquipamiento from "../components/ModuloEquipamiento";
import ModuloApoyo from "../components/ModuloApoyo";
import ModuloCirugia from "../components/ModuloCirugia";
import ModuloProcedencia from "../components/ModuloProcedencia";
import ModuloAnestesia from "../components/ModuloAnestesia";
import ModuloQuirofano from "../components/ModuloQuirofano";
import ModuloConsulta3 from "../components/ModuloConsulta3";
import ModuloImplantes from "../components/ModuloImplantes";
import ModuloDrenajes from "../components/ModuloDrenajes";
import ModuloConsulta4 from "../components/ModuloConsulta4";
import ModuloPulsera from "../components/ModuloPulsera";
import ModuloServicio from "../components/ModuloServicio";
import ModuloDestino from "../components/ModuloDestino";
import ModuloSuspencion from "../components/ModuloSuspension";
import ModuloCirugiaRealizada from "../components/ModuloCirugiaRealizada";

const Inicio = () => {
  return (
    <section>
        <form className="row g-3 mx-3 mt-3">
            <ModuloDatos titulo="Datos del Paciente"	 />
            <ModuloHorarios titulo="Horarios" />
            <ModuloConsulta titulo="Consulta" />
            <ModuloAccesorios titulo="El paciente tiene Accesorios?" />
            <ModuloConsulta2 titulo="Consulta 2" />
            <ModuloEquipamiento titulo="El procedimiento requiere alguno de los siguientes equipos?" />
            <ModuloApoyo titulo="El procedimiento requiere de algunos de los siguientes servicios de apoyo:" />
            <ModuloCirugia titulo="Tipo de Cirugía:" />
            <ModuloProcedencia titulo="Procedencia del Paciente:" />
            <ModuloAnestesia titulo="Tipo de anestesia utilizada:" />
            <ModuloQuirofano  titulo="Quirófano Asignado:" />
            <ModuloConsulta3 titulo="Consulta 3" />
            <ModuloImplantes titulo="Se colocó alguno de los siguientes implantes:" />
            <ModuloDrenajes titulo="Se colocó alguno de los siguientes drenajes:" />
            <ModuloConsulta4 titulo="Conteo de Insumos Utilizados" /> 
            <ModuloPulsera titulo="Pulsera" />
            <ModuloServicio titulo="Servicio que interviene:"/>
            <ModuloDestino titulo="Destino del paciente:"/>
            <ModuloSuspencion titulo="La cirugía fue suspendida? Indique la causa:"/>
            <ModuloCirugiaRealizada titulo="Que cirugía se realizó? Especifique"/>            
        </form>
    </section>
  );
};

export default Inicio;
