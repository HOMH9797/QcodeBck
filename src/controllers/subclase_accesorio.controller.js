import subclase_accesorio from '../models/subclase_accesorio';

export async function create_subclase_accesorio(req, res){
    const {nombre,clase_accesorio_id} = req.body;
    try{
        let newsubclase_accesorio = await subclase_accesorio.create({
            nombre,clase_accesorio_id
        },{
            fields:['nombre','clase_accesorio_id']
        });
        if(newsubclase_accesorio)
           return res.json({message:'subclase de accesorio creada exitosamente ',newsubclase_accesorio});
    }catch(error){
        
        console.log(error) 
        res.status(500).json({
            message:'Something goes wrong'
        })
    }
}