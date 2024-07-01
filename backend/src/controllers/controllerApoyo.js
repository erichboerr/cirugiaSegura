import Apoyo from "../models/Apoyo.js";

export const getAllApoyos = async (req, res) => {
    const apoyos = await Apoyo.findAll();
    res.json(apoyos);
}