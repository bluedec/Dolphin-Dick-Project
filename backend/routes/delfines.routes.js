import { Router } from "express";
import {
  getDelfines,
} from "../controllers/delfines.controller.js";

const router = Router();

//tener en cuenta el orden de las rutas que comienzan de la misma manera
router.get("/delfines/all", getDelfines);

export default router;