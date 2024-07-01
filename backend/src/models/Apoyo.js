import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Paciente from "./Paciente.js";

const Apoyo = db.define(
  "Apoyos",
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
    ApoyoOtros: {
        type: DataTypes.STRING,
      },   
  },
  {
    timestamps: false,
  }
);

Paciente.hasOne(Apoyo);

export default Apoyo;