import Consulta2 from "../models/Consulta2.js";

export const createConsulta2 = async (req, res) => {
    try {
        const {
            IgieneChk,
            HHCCCPapelChk,
            EstudiosComplementariosChk,
            AlergiaChk,
            AlergiaChkAQue,
        } = req.body;
        const newConsulta2 = await Consulta2.create({
            IgieneChk: IgieneChk,
            HHCCCPapelChk: HHCCCPapelChk,
            EstudiosComplementariosChk: EstudiosComplementariosChk,
            AlergiaChk: AlergiaChk,
            AlergiaChkAQue: AlergiaChkAQue,
        });
        res.status(200).json(newConsulta2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}