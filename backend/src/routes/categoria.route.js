const { Router } = require("express");
const categoriaCtrl = require('../controllers/categoria.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', categoriaCtrl.list);                                     
route.get('/listid/:id', categoriaCtrl.listid);                                   
route.post('/add', categoriaCtrl.add);
route.put('/update/:id', categoriaCtrl.update);
route.delete('/delete/:id', categoriaCtrl.delete);

module.exports = route;