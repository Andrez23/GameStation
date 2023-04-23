const { Router } = require("express")
const testCtrl = require("../controllers/test.controller")
const route = Router()

route.get("/listar", testCtrl.listar);

module.exports = route