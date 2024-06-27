import Horarios from "../models/Horarios.js";

export const createHorarios = async (req, res) => {
  try {
    const {
      AreaQXInit,
      AreaQXOut,
      QuirofanoInit,
      QuirofanoOut,
      CirugiaInit,
      CirugiaOut,
    } = req.body;
    const horarios = await Horarios.create({
      AreaQXInit: AreaQXInit,
      AreaQXOut: AreaQXOut,
      QuirofanoInit: QuirofanoInit,
      QuirofanoOut: QuirofanoOut,
      CirugiaInit: CirugiaInit,
      CirugiaOut: CirugiaOut,      
    });
    res.json(horarios);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllHorarios = async (_, res) => {
  try {
    const horarios = await Horarios.findAll();
    res.json(horarios);
  } catch (error) {
    res.json({ message: error.message });
  }
};
