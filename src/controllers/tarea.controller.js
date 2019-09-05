import tarea from '../models/tarea';

export async function create_tarea(req, res){
    const {descripcion,subclase_accesorio_id,fecha_inicio,fecha_fin} = req.body;
    try{
        let newtarea = await tarea.create({
            descripcion,subclase_accesorio_id,fecha_inicio,fecha_fin
        },{
            fields:['descripcion','subclase_accesorio_id','fecha_inicio','fecha_fin']
        });
        if(newtarea)
           return res.json({message:'Accesorio creado exitosamente ',newtarea});
    }catch(error){
        console.log(error)
        
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}

export async function consultar_tarea(req,res){
    try{}
    catch(err){
        
    }
}