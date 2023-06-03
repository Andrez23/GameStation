const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const juegoSchema = new Schema({
    id_juego: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    descripción: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    },
    categoría:{
        type: String,
        require: true,
    },
    subcategoría:{
        type: String,
    },
},
    {
        timestamps: true
    });

    //facturaSchema.plugin(mongoosePaginate)

module.exports = model('juego', juegoSchema);