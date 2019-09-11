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
export async function get_tarea(req,res){
    try{
        const tareas = await tarea.findAll();
        res.json({tareas})
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export async function get_tareaid(req,res){
    try{
        const{id} = req.params;
        const tareadb = await tarea.findAll({
            attribute:['descripcion','subclase_accesorio_id','fecha_inicio','fecha_fin'],
            where: {id}
        });
        res.json({
            tareadb
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export async function update_tarea(req,res){
    try{
        const {id} = req.params;
        const {descripcion,subclase_accesorio_id,fecha_inicio,fecha_fin} = req.body;
        const newTarea = await tarea.findAll({
            attribute:['descripcion','subclase_accesorio_id','fecha_inicio','fecha_fin'],
            where: {id}
        });

        if(newTarea.length > 0){
            newTarea.forEach(async element =>{
                await element.update({descripcion,subclase_accesorio_id,fecha_inicio,fecha_fin});
            });
        }
        return res.json({
            message: 'Project update successfully',
            data: newTarea
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
export async function delete_tarea(req,res){
    try{
        const {id}= req.params;
        const tareadb = await tarea.destroy({
            where:{id}
        });
        res.json({
            message: 'tarea eliminados',
            cantidad: tareadb
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}
