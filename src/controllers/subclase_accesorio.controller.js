import subclase_accesorio from '../models/subclase_accesorio';

export async function create_subclase_accesorio(req, res) {
    const { nombre, clase_accesorio_id } = req.body;
    try {
        let newsubclase_accesorio = await subclase_accesorio.create({
            nombre, clase_accesorio_id
        }, {
            fields: ['nombre', 'clase_accesorio_id']
        });
        if (newsubclase_accesorio)
            return res.json({ message: 'subclase de accesorio creada exitosamente ', newsubclase_accesorio });
    } catch (error) {

        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function subclase_porclase(req, res) {
    try {
        const { id } = req.params;
        const subclases = await subclase_accesorio.findAll({
            attribute: ['id', 'nombre', 'clase_accesorio_id'],
            where: { clase_accesorio_id: id }
        });
        res.json({
            subclases
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function subclase_id(req, res) {
    try {
        const { id } = req.params;
        const subclases = await subclase_accesorio.findAll({
            attribute: ['id', 'nombre', 'clase_accesorio_id'],
            where: { id }
        });
        res.json({
            subclases
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function subclase_update(req, res) {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const newsubclase_accesorio = await subclase_accesorio.findAll(
            {
                attribute: ['id', 'nombre', 'clase_accesorio_id'],
                where: { id }
            });
        if (newsubclase_accesorio.length > 0) {
            newsubclase_accesorio.forEach(async element => {
                await element.update({nombre});
            });
        }

        return res.json({
            message: 'Project update successfully',
            data: newsubclase_accesorio
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function subclase_delete(req, res){
    try{
        const {id}= req.params;
        const subclase= await subclase_accesorio.destroy({
            where: { id }
        });
        res.json({
            message: 'Subclase de accesorio eliminada',
            cantidad: subclase
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

