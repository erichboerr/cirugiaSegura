import express from "express";
const router = express.Router();
import {
  getAllPaciente,
  getOnePaciente,
  updatePaciente,
  deletePaciente,
  createPaciente,
} from "../controllers/controllerPaciente.js";
import { getAllHistoriaClinica } from "../controllers/controllerHistoriaClinica.js";
import { createHorarios, getAllHorarios } from "../controllers/controllerHorarios.js";
import { getAllConsultas, createConsultas } from "../controllers/controllerConsulta.js";
import { getAllAccesorios, postAccesorios } from "../controllers/controllerAccesorios.js";
import { createConsulta2 } from "../controllers/controllerConsulta2.js";
import { getAllApoyos } from "../controllers/controllerApoyo.js";


router.get("/", getAllPaciente);
router.get("/:id", getOnePaciente);
router.post("/", createPaciente);
router.put("/:id", updatePaciente);
router.delete("/:id", deletePaciente);

router.get("/hc", getAllHistoriaClinica );

router.post("/horarios", createHorarios );
router.get("/horarios/:id", getAllHorarios );

router.get("/consultas/:id", getAllConsultas );
router.post("/consultas", createConsultas );

router.get("/accesorios", getAllAccesorios );
router.post("/accesorios", postAccesorios );

router.post("/consulta2", createConsulta2 );

router.get("/apoyo/:id", getAllApoyos );

export default router;
