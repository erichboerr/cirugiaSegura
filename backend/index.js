import express from "express";
import db from "./src/database/db.js";
import rutas from "./src/routes/Routes.js";
import dontenv from "dotenv";
const app = express();

dontenv.config();

const PORT = process.env.PORT || 5050;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/", rutas);

//Reiniciando tablas true borra la tablas y la crea de nuevo
db.sync({ force: true }).then(() => {
  console.log("Base de datos sincronizada");
});
//Conexion
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  db.authenticate()
    .then(() => {
      console.log("Base de datos conectada");
    })
    .catch((err) => {
      console.log("Error al conectar la base de datos: " + err);
    });
});
