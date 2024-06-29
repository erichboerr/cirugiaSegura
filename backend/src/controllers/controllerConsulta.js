import Consulta from "../models/Consulta.js";
export const createConsultas = async (req, res) => {
    try {
      const { dni, nombre, t_sexo_id } = req.body;
      const consulta = await Consulta.create({ dni, nombre, t_sexo_id });
      res.json(consulta);
    } catch (error) {
      res.json({ message: error.message });
    }
  };       

  export const getAllConsultas = async (_, res) => {
    try {
      const consulta = await Consulta.findAll();
      res.json(consulta);
    } catch (error) {
      res.json({ message: error.message });
    }
  };    
    