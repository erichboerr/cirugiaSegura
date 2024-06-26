import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Paciente from "./Paciente.js";

const HistoriaClinica = sequelize.define(
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
