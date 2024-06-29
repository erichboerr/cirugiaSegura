import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";


const Consulta2 = db.define(
    "Consultas2",
    {
        IgieneChk: {
            type: DataTypes.TINYINT,
        },
        HHCCCPapelChk: {
            type: DataTypes.TINYINT,
        },
        EstudiosComplementariosChk: {
            type: DataTypes.TINYINT,
        },
        AlergiaChk: {
            type: DataTypes.TINYINT,
        },
        AlergiaChkAQue: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
    },
    {
        timestamps: false,
    }

);

Paciente.hasOne(Consulta2);

export default Consulta2;