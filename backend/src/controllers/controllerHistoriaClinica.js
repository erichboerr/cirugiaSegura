import HistoriaClinica from "../models/HistoriaClinica.js";

export const createHistoriaClinica = async (req, res) => {
  try {
    const { dni, nombre, t_sexo_id } = req.body;
    const historiaClinica = await HistoriaClinica.create({ dni, nombre, t_sexo_id });
    res.json(historiaClinica);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllHistoriaClinica = async (_, res) => {
  try {
    const historiaClinica = await HistoriaClinica.findAll();
    res.json(historiaClinica);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getOneHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const historiaClinica = await HistoriaClinica.findByPk(id);
    res.json(historiaClinica);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const { hhcc } = req.body;
    const historiaClinica = await HistoriaClinica.update(
      { hhcc },
      { where: { id } }
    );
    res.json(historiaClinica);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteHistoriaClinica = async (req, res) => {
  try {
    const { id } = req.params;
    const historiaClinica = await HistoriaClinica.destroy({ where: { id } });
    res.json(historiaClinica);
  } catch (error) {
    res.json({ message: error.message });
  }
};