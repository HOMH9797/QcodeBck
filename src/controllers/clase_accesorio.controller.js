import clase_accesorio from '../models/clase_accesorio';

export async function consultar_clase_accesorio(req, res) {
    try {
        const accesorios = await clase_accesorio.findAll();
        res.json({
            accesorios
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function una_clase_accesorio(req, res) {
    try {
        const { id } = req.params;
        const accesorios = await clase_accesorio.findOne({
            where: {
                id
            }
        });
        res.json({
            accesorios
        })
    } catch (err) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function eleminar_clase_accesorio(req, res) {
    try {
        const { id } = req.params;
        const accesorio = await clase_accesorio.destroy({
            where: { id }
        });
        res.json({
            message: 'Clase de accesorio eliminada',
            cantidad: accesorio
        })
    } catch (err) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }

}

export async function create_clase_accesorio(req, res) {
    const { nombre } = req.body;
    try {
        let newclase_accesorio = await clase_accesorio.create({
            nombre
        }, {
            fields: ['nombre']
        });
        if (newclase_accesorio)
            return res.json({ message: 'clase de accesorio creada exitosamente ', newclase_accesorio });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export async function actualizar_clase_accesorio(req, res) {
    const { id } = req.params;
    const { nombre } = req.body;
    const newclase_accesorios = await clase_accesorio.findAll(
        {
            attribute: ['id', 'nombre'],
            where: { id }
        });
    if (newclase_accesorios.length > 0) {
        newclase_accesorios.forEach(async element => {
            await element.update({
                nombre
            });
        });
    }

    return res.json({
        message: 'Project update successfully',
        data: newclase_accesorios
    })
}

