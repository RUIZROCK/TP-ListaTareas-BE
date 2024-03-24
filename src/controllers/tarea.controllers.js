import Tarea from "../database/models/tarea.js"

export const crearTarea = async(req,res)=>{
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

export const listarTarea = async(req,res)=>{
    try {
        const listaTareas= await Tarea.find()

        res.status(200).json("se obtuvo la lista de tareas")
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo obtener la lista de tareas"
        })
    }
}

export const obtenerTarea = async(req, res)=>{
    try{
        console.log(req.params.id);

        const tareaBuscada = await Tarea.findById(req.params.id);

        res.status(200).json(tareaBuscada);
    }catch(error){
        console.error(error)
        res.status(404).json({mensaje: "No se encontro la tarea buscada"})
    }
}

export const editarTarea = async (req, res) => {
    try {
        
      const tareaBuscada =  await Producto.findById(req.params.id);
      
      if(!tareaBuscada){
          return res.status(404).json({mensaje: "El tarea no fue encontrado."});
      }
      await Tarea.findByIdAndUpdate(req.params.id, req.body);
      
      res.status(200).json({mensaje: "La tarea fue editada correctamente"})
    } catch (error) {
      console.error(error);
      res.status(500).json({mensaje: "Ocurrio un error al editar la tarea"})
    }
}
