const mongoose = require('mongoose');

const CuentaSchema = mongoose.Schema({

id_cliente:{
    type:Number,
    required: true
},
num_cuenta:{
    type:String,
    required: true
},
contra:{
    type:String,
    required: true
},
saldo:{
    type:Number,
    required: true
},

fechaCreacion:{
    type:Date,
    default: Date.now()
}

});

module.exports = mongoose.model('Cuenta',CuentaSchema);

