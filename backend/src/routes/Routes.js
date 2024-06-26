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

router.get("/", getAllPaciente);
router.get("/:id", getOnePaciente);
router.post("/", createPaciente);
router.put("/:id", updatePaciente);
router.delete("/:id", deletePaciente);

router.get("/hc", getAllHistoriaClinica )

export default router;
