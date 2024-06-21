const express = require("express");
const router = express.Router();
import formControllers from "../controllers/formControllers";

router.post("/", (req, res) => {formControllers.ingresar});