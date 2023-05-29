const { Router } = require("express");
const subcategoriaCtrl = require('../controllers/subcategoria.controller');
// const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/list', subcategoriaCtrl.list);                                     
route.get('/listid/:id', subcategoriaCtrl.listid);                                   
route.post('/add', subcategoriaCtrl.add);
route.put('/update/:id', subcategoriaCtrl.update);
route.delete('/delete/:id', subcategoriaCtrl.delete);

module.exports = route;