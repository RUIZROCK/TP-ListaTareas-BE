import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    detalle:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    importancia:{
        type:String,
        required:true,
        enum:["Baja", "Media", "Alta", "Muy alta"]
    }
})

const Tarea = mongoose.model('tarea',tareaSchema)

export default Tarea;