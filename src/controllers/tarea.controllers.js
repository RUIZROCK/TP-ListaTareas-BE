import Tarea from "../database/models/tarea.js"

const crearTarea = async(req,res)=>{
    try {
        const tareaNew = new Tarea(req.body);

        await tareaNew.save()

        res.status(201).json("Se guardo una nueva tarea!")
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo crear la tarea"
        })
    }
}