const { Router } = require("express")
const testCtrl = require("../controllers/test.controller")
const route = Router()

route.get("/listar", testCtrl.listar);
route.post("/add", testCtrl.Agregar);
route.put("/update/:id",testCtrl.update);
route.delete("/delete/:id", testCtrl.delete);

module.exports = route