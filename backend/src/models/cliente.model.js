const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const clienteSchema = new Schema({
    documento_usuario: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    teléfono:{
        type: Number,
    },
    dirección:{
        type: String,
    },
    correoElectrónico: {
        type: String,
        require: true,
        unique: true,
    },
    númeroAuxiliar:{
        type: Number,
    },
    fechaNacimiento:{
        type: String,
    }
},
    {
        timestamps: true
    });

clienteSchema.plugin(mongoosePaginate)

module.exports = model('cliente', clienteSchema);