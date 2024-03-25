import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTarea, obtenerTarea } from "../controllers/tarea.controllers.js";
import { check } from "express-validator";

const router = Router();

router.route('/tareas').get(listarTarea).post(
    [
        check("titulo")
        .notEmpty()
        .withMessage("el titulo es obligatorio")
        .isLength({min:2,max:30})
        .withMessage("el titulo debe tener entre 2 y 30 caracteres"),

        check("detalle")
        .notEmpty()
        .withMessage("el detalle es obligatorio")
        .isLength({min:2,max:30})
        .withMessage("el detalle debe tener entre 2 y 300 caracteres"),

        check("importancia")
        .notEmpty()
        .withMessage("la importancia es obligatorio")
    ],crearTarea)
router.route('/tareas/:id').get(obtenerTarea).put(editarTarea).delete(borrarTarea)

export default router;