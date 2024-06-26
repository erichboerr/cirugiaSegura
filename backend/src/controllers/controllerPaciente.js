import Paciente from "../models/Paciente.js";
import HistoriaClinica from "../models/HistoriaClinica.js";

export const createPaciente = async (req, res) => {
  try {
    //desestructuramos lo que viene por body
    const { dni, nombre, t_sexo_id, Hc } = req.body;
    //creamos el paciente
    
    
    
      
    
      const paciente = await Paciente.create({
        dni: dni,
        nombre: nombre,
        t_sexo_id: t_sexo_id,
      });      

      var id = paciente.id;
      

    //creamos la historia clinica
    const historiaClinica = await HistoriaClinica.create({
      HHCC: Hc,
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