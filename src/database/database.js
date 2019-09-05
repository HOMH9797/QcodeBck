import Sequelize from 'sequelize';

export const conectionStr = new Sequelize(
    'qcode',
    'postgres',
    'qwert',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle:10000
        },
        logging: false
    }
)