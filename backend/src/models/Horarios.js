import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const Horarios = db.define(
  "Horarios",
  {
    AreaQXInit: {
      type: DataTypes.TIME,
    },
    AreaQXOut: {
      type: DataTypes.TIME,
    },
    QuirofanoInit: {
      type: DataTypes.TIME,
    },
    QuirofanoOut: {
      type: DataTypes.TIME,
    },
    CirugiaInit: {
      type: DataTypes.TIME,
    },
    CirugiaOut: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
  }
);

Paciente.hasOne(Horarios);

export default Horarios;
