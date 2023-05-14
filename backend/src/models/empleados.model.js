const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const empleadosSchema = new Schema({
    id_empleado: {
        type: Number,
        required: true,
    },
    documento_empleado: {
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
    cargo: {
        type: String,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
    },
    seguro: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

    //empleadosSchema.plugin(mongoosePaginate)

module.exports = model('empleados', empleadosSchema);