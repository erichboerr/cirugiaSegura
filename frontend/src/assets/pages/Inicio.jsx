import React from "react";
import ModuloDatos from "../components/ModuloDatos";
import ModuloHorarios from "../components/ModuloHorarios";
import ModuloConsulta from "../components/ModuloConsulta";
import ModuloAccesorios from "../components/ModuloAccesorios";
import ModuloConsulta2 from "../components/ModuloConsulta2";
import ModuloEquipamiento from "../components/ModuloEquipamiento";

const Inicio = () => {
  return (
    <section>
        <form className="row g-3 mx-3 mt-3">
            <ModuloDatos titulo="Datos del Paciente"	 />
            <ModuloHorarios titulo="Horarios" />
            <ModuloConsulta titulo="Consulta" />
            <ModuloAccesorios titulo="Tiene Accesorios" />
            <ModuloConsulta2 titulo="Consulta 2" />
            <ModuloEquipamiento titulo="Requiere Equipamiento" />
        </form>
    </section>
  );
};

export default Inicio;
