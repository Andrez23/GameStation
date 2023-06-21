const mongoose = require("mongoose");

const URI= "mongodb://127.0.0.1:27017/GameStation"

const conn= async () => {
    try{
        const db = await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("base de datos conectada",db.connection.name)
    } catch (error) {
        console.log(error.message)
    }
};
module.exports=conn()