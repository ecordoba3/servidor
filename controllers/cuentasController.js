const Cuenta = require("../models/Cuenta");

exports.crearCuentas = async (req,res)=>{
//console.log(req.body);
try {
    let cuenta;
    //Creamos nuestra cuenta
    cuenta = new Cuenta(req.body);
     
    await cuenta.save();
    res.send(cuenta);

    
} catch (error) {
  console.log(error);  
  res.status(500).send('Hubo un error');
}

}

exports.obtenerCuentas = async (req,res)=>{
try {
    const cuentas = await Cuenta.find(); 
    res.json(cuentas);

} catch (error) {
  console.log(error);  
  res.status(500).send('Hubo un error'); 
}

}


exports.editarCuentas = async (req,res)=>{
    try {

        const {id_cliente,num_cuenta,contra,saldo } = req.body;

         let cuenta = await Cuenta.findById(req.params.id);
    
        if(!cuenta){
            res.status(404).json({msg:'No existe esta cuenta'})
        }

        cuenta.id_cliente = id_cliente;
        cuenta.num_cuenta =num_cuenta;
        cuenta.saldo = saldo;
        cuenta.contra = contra;
        cuenta = await Cuenta.findOneAndUpdate({_id: req.params.id},cuenta,{new:true})
        res.json(cuenta);
    
    } catch (error) {
      console.log(error);  
      res.status(500).send('Hubo un error'); 
    }
    
    }



    exports.obtenerCuenta = async (req,res)=>{
        try {
    
           let cuenta = await Cuenta.findById(req.params.id);
        
            if(!cuenta){
                res.status(404).json({msg:'No existe esta cuenta'})
            }
    
           res.json(cuenta);
        
        } catch (error) {
          console.log(error);  
          res.status(500).send('Hubo un error'); 
        }
        
        }


        exports.eliminarCuenta = async (req,res)=>{
            try {
        
               let cuenta = await Cuenta.findById(req.params.id);
            
                if(!cuenta){
                    res.status(404).json({msg:'No existe esta cuenta'})
                }
        
               
               await Cuenta.findOneAndRemove({_id:req.params.id})
               res.json({msg:"Cuenta eliminada con exito"});
            
            } catch (error) {
              console.log(error);  
              res.status(500).send('Hubo un error'); 
            }
            
            }   