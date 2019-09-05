import Sequelize from 'sequelize';
import { conectionStr } from '../database/database';
import tarea from './tarea';

const subclase_accesorio = conectionStr.define('subclase_accesorios',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    clase_accesorio_id:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});
subclase_accesorio.hasMany(tarea,{foreignkey:'subclase_accesorio_id', sourceKey: 'id'});


export default subclase_accesorio;