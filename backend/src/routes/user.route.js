const { Router } = require("express"); //Importar rutas de express
const userCtrl = require('../controllers/user.controller'); //importar controlador
//const validarCampos = require("../middleware/Validar");
const route = Router(); //Contiene todo lo de "Router"

route.get('/list', userCtrl.list);                                     
route.get('/listid/:id ', userCtrl.listid);                                   
route.post('/add', userCtrl.add);
route.put('/update/:id', userCtrl.update);
route.delete('/delete/:id', userCtrl.delete);




module.exports = route