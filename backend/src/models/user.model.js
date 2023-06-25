const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    documento: {
        type: Number,
        required: true,
    },
    tipo_de_documento: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    salary:{
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('users', userSchema);