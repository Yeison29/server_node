const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

//Llamando a las rutas

users(app);

server.listen(3000,'127.0.0.1'||'localhost',function() {
    console.log('Aplicacion NodeJs id=>'+process.pid+' puerto =>'+port+' iniciando...');
});

/* app.get('/', (req, res)=> {

    res.sendFile('Ruta raiz del backend');

});

app.get('/una', (req, res)=> {

    res.sendFile('Ruta una del backend');

});  */

//Manejo de errores

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}; 