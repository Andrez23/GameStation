const { Router } = require("express");
const juegoCtrl = require('../controllers/juego.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', juegoCtrl.list);                                     
route.get('/listid/:id ', juegoCtrl.listid);                                   
route.post('/add', juegoCtrl.add);
route.put('/update/:id', juegoCtrl.update);
route.delete('/delete/:id', juegoCtrl.delete);




module.exports = route