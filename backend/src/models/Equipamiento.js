import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const Equipamiento = db.define(
  "Equipamiento",
  {
    0: {
      type: DataTypes.STRING,
    },
    1: {
      type: DataTypes.STRING,
    },
    2: {
      type: DataTypes.STRING,
    },
    3: {
      type: DataTypes.STRING,
    },
    4: {
      type: DataTypes.STRING,
    },
    5: {
      type: DataTypes.STRING,
    },
    6: {
      type: DataTypes.STRING,
    },
    EquipamientoOtros: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Paciente.hasOne(Equipamiento);

export default Equipamiento;
