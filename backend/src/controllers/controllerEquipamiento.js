import Equipamiento from "../models/Equipamiento.js";

export const getEquipamiento = async (req, res) => {
    const equipamiento = await Equipamiento.findAll();
    res.json(equipamiento);
};

export const createEquipamiento = async (req, res) => {
    const { Eq0, Eq1, Eq2, Eq3, Eq4, Eq5,  Cual } = req.body;
    const equipamiento = await Equipamiento.create({ Eq0:0, Eq1:1, Eq2:2, Eq3:3, Eq4:4, Eq5:5, Cual:Cual });
    res.json(equipamiento);
}