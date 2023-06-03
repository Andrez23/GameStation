const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('./database')

const app = express();/* hereda todo de express, es decir, todo lo que viene*/

app.set("Port", 4000); /*esta es la comunicacion con el puerto, es decir, su configuracion*/

app.use(morgan("dev")); /*morgan nos sirve para saber que tipo de peticiones está recibiedno nuestro servidor*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); /*nos sirve apra convertir los datos a objetos json y leerlos */

app.use(cors({ origin: "*" })); /*Cors nos sirve para permitir conexiones desde cualquier cliente */

app.use("/api/user", require("./routes/user.route"))/*rutas, o vistas */
app.use("/api/factura", require("./routes/factura.route"))
app.use("/api/empleados", require("./routes/empleados.route"))
app.use("/api/subcategia", require("./routes/subcategoria.route"))
app.use("/api/cliente", require("./routes/cliente.route"))
app.use("/api/categoria", require("./routes/categoria.route"))
app.use("/api/juego", require("./routes/juego.route"))



app.listen(app.get("Port"), () => {
    console.log("Servidor corriendo por puerto", app.get("Port")); /*Iniciando el server, dando aviso de que esta corriendo por el puerto 4000*/
});