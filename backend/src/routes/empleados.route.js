const { Router } = require("express");
const empleadosCtrl = require('../controllers/empleados.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', empleadosCtrl.list);                                     
route.get('/listid/:id ', empleadosCtrl.listid);                                   
route.post('/add', empleadosCtrl.add);
route.put('/update/:id', empleadosCtrl.update);
route.delete('/delete/:id', empleadosCtrl.delete);




module.exports = route