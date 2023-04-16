const {Router}=require("express")
const route= Router()
const testCtrl=require("../controllers/test.controller")

route.get("/listar", testCtrl.listar);

module.export= route