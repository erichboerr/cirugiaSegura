import Accesorios from "../models/Accesorios.js";

export const getAllAccesorios = async (req, res) => {   
    try {   
        const accesorios = await Accesorios.findAll();
        res.json(accesorios);
    } catch (error) {
        res.json({ message: error.message });
    }   
};

export const postAccesorios = async (req, res) => {
    try {
       const {Ninguno, Aros, Piercing, Collar, Pulsera, Reloj, ProtesisDentalRemovible, TelefonoCelular, Ropa  } = req.body.AccesoriosChk;
        
        const accesorios = await Accesorios.create({
            Ninguno: Ninguno,
            Aros: Aros,
            Piercing: Piercing,
            Collar: Collar,
            Pulsera: Pulsera,
            Reloj: Reloj,
            ProtesisDentalRemovible: ProtesisDentalRemovible,
            TelefonoCelular: TelefonoCelular,
            Ropa: Ropa
        });
        res.json(accesorios);
    } catch (error) {
        res.json({ message: error.message });
    }
}
        
   