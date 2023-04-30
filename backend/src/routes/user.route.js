const {Router} = require("express")
const userCtrl = require("../controller/user.controller");
const validarCampos = require("../middleware/Validar");
const route= Route();

route.get("/list", userCtrl.list);                                       //enlista uaurios
route.get("/userid/:id", userCtrl.listid);                                    //enlista por id
route.post("/add", userCtrl.add);
route.put("/update/:id", userCtrl.update);
route.delete("/delete/:id",userCtrl.delete);




module.exports= route