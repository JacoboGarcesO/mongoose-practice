const {Router}=require('express');
const router=Router();

const Alumno=require('../models/Alumno');

router.get('/', async(req, res)=>{
    const alumno=await Alumno.find().sort('_id');
    res.json(alumno);
});

router.post('/', async(req, res)=>{
    const{nombre, apellido}=req.body;
    const newAlumno=new Alumno({nombre, apellido});
    newAlumno.save();
    res.json({message:"Alumno ingresado"});
});

router.put('/:id', async(req, res)=>{
    const{nombre, apellido}=req.body;
    const id=req.params.id;
    const alumno=await Alumno.findByIdAndUpdate(id,{$set:req.body}, (err, resultado)=>{
        if(err){
            console.log(err);
        }else{
            res.json({message:'Alumno actualizdo'});
        }
    });
});

router.delete('/:id', async(req, res)=>{
    const id=req.params.id;
    const alumno=await Alumno.findByIdAndDelete(id);
    res.json({message:'Alumno eliminado'});
});

module.exports=router;
