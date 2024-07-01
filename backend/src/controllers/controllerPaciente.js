import Paciente from "../models/Paciente.js";
import HistoriaClinica from "../models/HistoriaClinica.js";
import Horarios from "../models/Horarios.js";
import Consulta from "../models/Consulta.js";
import Accesorios from "../models/Accesorios.js";
import Consulta2 from "../models/Consulta2.js";
import Equipamiento from "../models/Equipamiento.js";
import Apoyo from "../models/Apoyo.js";

export const createPaciente = async (req, res) => {
  try {
    //desestructuramos lo que viene por body
    const {
      dni,
      nombre,
      t_sexo_id,
      HHCC,
      AreaQXInit,
      AreaQXOut,
      QuirofanoInit,
      QuirofanoOut,
      CirugiaInit,
      CirugiaOut,
      PulseraChk,
      ConsentimientoChk,
      AyunoChk,
      MarcapasosChk,
      IgieneChk,
      HHCCCPapelChk,
      EstudiosComplementariosChk,
      AlergiaChk,
      AlergiaChkAQue, 
      EquipamientoOtros,  
      ApoyoOtros,   
    } = req.body;

    const [
      Ninguno,
      Aros,
      Piercing,
      Collar,
      Pulsera,
      Reloj,
      ProtesisDentalRemovible,
      TelefonoCelular,
      Ropa,
     ] = req.body.AccesoriosChk;

     const [
      Ninguno2,
      ElectroBisturi,
      laparascopíaCo2,
      laparascopíaSinCo2,
      energiaHarmonic,
      GammaProbe,
      Otros
     ]= req.body.EquipamientoChk;

     const[
      Ninguno3,
      radiología,
      ortopedia,
      Anatomía,
      Otros2
    ] = req.body.ApoyoChk;

    //creamos el paciente
    console.log(EquipamientoOtros);

  //creamos el paciente
    const paciente = await Paciente.create({
      dni: dni,
      nombre: nombre,
      t_sexo_id: t_sexo_id,
    });
    console.log(paciente);
    var id = paciente.id;

    //cargamos la historia clinica
    const historiaClinica = await HistoriaClinica.create({
      HHCC: HHCC,
      PacienteId: id,
    });

    //cargamos los horarios de la cirugia
    const horarios = await Horarios.create({
      AreaQXInit: AreaQXInit,
      AreaQXOut: AreaQXOut,
      QuirofanoInit: QuirofanoInit,
      QuirofanoOut: QuirofanoOut,
      CirugiaInit: CirugiaInit,
      CirugiaOut: CirugiaOut,
      PacienteId: id,
    });

    //cargamos los datos del modulo de consulta
    const consulta = await Consulta.create({
      PulseraChk: PulseraChk,
      ConsentimientoChk: ConsentimientoChk,
      AyunoChk: AyunoChk,
      MarcapasosChk: MarcapasosChk,
      PacienteId: id,
    });

    //cargamos el modulo de accesorios
    const accesorios = await Accesorios.create({
      0: Ninguno,
      1: Aros,
      2: Piercing,
      3: Collar,
      4: Pulsera,
      5: Reloj,
      6: ProtesisDentalRemovible,
      7: TelefonoCelular,
      8: Ropa,
      PacienteId: id,
    });

    //cargamos el modulo de Consulta2
    const consulta2 = await Consulta2.create({
      IgieneChk: IgieneChk,
      HHCCCPapelChk: HHCCCPapelChk,
      EstudiosComplementariosChk: EstudiosComplementariosChk,
      AlergiaChk: AlergiaChk,
      AlergiaChkAQue: AlergiaChkAQue,
      PacienteId: id,
      
    });

    //Cargamos el modulo de Equipamiento
    const equipamiento = await Equipamiento.create({
      0: Ninguno2,
      1: ElectroBisturi,
      2: laparascopíaCo2,
      3: laparascopíaSinCo2,
      4: energiaHarmonic,
      5: GammaProbe,
      6: Otros,
      EquipamientoOtros: EquipamientoOtros,
      PacienteId: id,     
    });

    //Cargamos el modulo de Apoyo
    const apoyo = await Apoyo.create({
      0: Ninguno3,
      1: radiología,
      2: ortopedia,
      3: Anatomía,
      4: Otros2,
      ApoyoOtros: ApoyoOtros,
      PacienteId: id,     
    });


    res.json("paciente creado");
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllPaciente = async (_, res) => {
  try {
    const paciente = await Paciente.findAll();
    res.json(paciente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOnePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    res.json(paciente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const { dni, nombre, t_sexo_id } = req.body;
    const paciente = await Paciente.update(
      { dni, nombre, t_sexo_id },
      { where: { id } }
    );
    res.json(paciente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.destroy({ where: { id } });
    res.json(paciente);
  } catch (error) {
    res.json({ message: error.message });
  }
};
