import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Paciente from "./Paciente.js";

const HistoriaClinica = sequelize.define(
  "HistoriasClinicas",
  {
    HHCC: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
  
);

Paciente.hasOne(HistoriaClinica );

export default HistoriaClinica;
