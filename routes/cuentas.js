//Rutas para las cuentas

const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');



// api/cuentas
router.post('/',cuentasController.crearCuentas)
router.get('/',cuentasController.obtenerCuentas)
router.put('/:id',cuentasController.editarCuentas)
router.get('/:id',cuentasController.obtenerCuenta)
router.delete('/:id',cuentasController.eliminarCuenta)

module.exports = router;
