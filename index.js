const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/cuentas',require('./routes/cuentas'));

//Definimos ruta principal

// app.get('/',(req,res)=>{
//     res.send('Hola mundo');
   
// })



app.listen(4000,()=>{
console.log('El servidor esta corriendo perfectamente');
})
