import express from "express";
import {
  getAllAmmunition,
  getOneAmmunition,
  deleteAmmunition,
  createAmmunition,
  updateAmmunitionController,
} from "../controllers/ammunitionControllers.js";

const ammunitionRouter = express.Router();

ammunitionRouter.get("/", getAllAmmunition);

ammunitionRouter.get("/:id", getOneAmmunition);

ammunitionRouter.delete("/:id", deleteAmmunition);

ammunitionRouter.post("/", createAmmunition);

ammunitionRouter.put("/:id", updateAmmunitionController);

export default ammunitionRouter;
