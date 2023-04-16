const express= require("express");/* */ 
const morgan = require("morgan");
const cors = require("cors");

const app = express();/* hereda todo de express, es decir, todo lo que viene*/ 

app.set("Port",4000); /*morgan nos sirve para saber que tipo de peticiones está recibiedno nuestro servidor*/

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json()); /*nos sirve apra convertir los datos a objetos json y leerlos */

app.use(cors({origin: "*"})); /*Cors nos sirve para permitir conxoines desde cualqueier cliente */

/*rutas o vistas */

app.listen(app.get("Port"),() => {
    console.log("Servidor corriendo por puerto", app.get("Port"));
});



