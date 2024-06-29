import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const Accesorios = db.define(
    "Accesorios",
    {
        0: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        1: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        2: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        3: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        4: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        5: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        6: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        7: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        8: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
    },
    {
        timestamps: false,
    }
);  
Paciente.hasOne(Accesorios);

export default Accesorios;