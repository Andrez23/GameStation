const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const clienteSchema = new Schema({
    documento_usuario: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    telefono:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        require: true,
    },
},
    {
        timestamps: true
    });

    //facturaSchema.plugin(mongoosePaginate)

module.exports = model('cliente', clienteSchema);