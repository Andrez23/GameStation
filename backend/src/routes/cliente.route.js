const { Router } = require("express");
const clienteCtrl = require('../controllers/cliente.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', clienteCtrl.list);                                     
route.get('/listid/:id', clienteCtrl.listid);                                   
route.post('/add', clienteCtrl.add);
route.put('/update/:id', clienteCtrl.update);
route.delete('/delete/:id', clienteCtrl.delete);

module.exports = route;