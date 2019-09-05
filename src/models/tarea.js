import Sequelize from 'sequelize';
import { conectionStr } from '../database/database';

const tarea = conectionStr.define('tareas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    subclase_accesorio_id: {
        type: Sequelize.INTEGER
    },
    fecha_inicio: {
        type: Sequelize.DATE
    },
    fecha_fin:{
        type: Sequelize.DATE
    }
},{
    timestamps: false
});

export default tarea;