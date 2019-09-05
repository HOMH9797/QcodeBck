import express, {json} from 'express';
import morgan from 'morgan';

//Import routes
import tareaRoutes from './routes/tarea.routes';
import clase_accesorioRoutes from  './routes/clase_accesorio.routes';
import subclase_accesorioRoutes from  './routes/subclase_accesorio.routes';

const app = express();


//Middlewares
app.use(morgan('dev'));
app.use(json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    next();
})

//Routes
app.use('/api/tarea',tareaRoutes);
app.use('/api/clase-accesorio',clase_accesorioRoutes);
app.use('/api/subclase-accesorio',subclase_accesorioRoutes);

export default app;