import Sequelize from 'sequelize';
import { conectionStr } from '../database/database';
import subclase_accesorio from './subclase_accesorio';


const clase_accesorio = conectionStr.define('clase_accesorios',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    nombre: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

// clase_accesorio.hasMany(subclase_accesorio,{foreignkey:'clase_accesorio_id', sourceKey: 'id'});

export default clase_accesorio;