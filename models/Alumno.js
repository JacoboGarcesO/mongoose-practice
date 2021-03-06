const {Schema, model}=require('mongoose');
const AlumnoSchema=new Schema({
    nombre:{
        type: String, required:true
    },
    apellido:{
        type: String, required:true
    },
    created_since:{
        type:Date, default:Date.now
    }
});
module.exports= model('Alumno', AlumnoSchema);