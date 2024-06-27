import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const HistoriaClinica = db.define(
  "HistoriasClinicas",
  {
    HHCC: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Paciente.hasOne(HistoriaClinica);

export default HistoriaClinica;
