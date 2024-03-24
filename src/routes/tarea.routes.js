import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTarea, obtenerTarea } from "../controllers/tarea.controllers.js";

const router = Router();

router.route('/tareas').get(listarTarea).post(crearTarea)
router.route('/tareas/:id').get(obtenerTarea).put(editarTarea).delete(borrarTarea)