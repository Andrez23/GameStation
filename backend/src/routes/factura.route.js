const { Router } = require("express");
const facturaCtrl = require('../controllers/factura.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', facturaCtrl.list);                                     
route.get('/listid/:id ', facturaCtrl.listid);                                   
route.post('/add', facturaCtrl.add);
route.put('/update/:id', facturaCtrl.update);
route.delete('/delete/:id', facturaCtrl.delete);




module.exports = route