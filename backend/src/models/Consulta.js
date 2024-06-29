import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const Consulta = db.define(
  "Consultas",
  {
    PulseraChk: {
      type: DataTypes.TINYINT,
    },
    ConsentimientoChk: {
      type: DataTypes.TINYINT,
    },
    AyunoChk: {
      type: DataTypes.TINYINT,
    },
    MarcapasosChk: {
      type: DataTypes.TINYINT,
    },   
  },
  {
    timestamps: false,
  }
);

Paciente.hasOne(Consulta);

export default Consulta;
