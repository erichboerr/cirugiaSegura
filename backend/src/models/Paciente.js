import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Paciente = db.define("Paciente", {
  dni: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  t_sexo_id: {
    type: DataTypes.INTEGER,
  },
});

export default Paciente;
