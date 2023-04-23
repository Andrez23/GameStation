const mongoose = require("mongoose");

const URI= "mongodb://localhost/testcrud"

const conn= async () => {
    try{
        const db = await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnidiedTopoly: true,
        });
        console.log("base de datos conectada",db.connection.name)
    } catch (error) {
        console.log(error.message)
    }
};
module.exports=conn()