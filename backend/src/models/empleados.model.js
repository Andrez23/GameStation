const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const empleadosSchema = new Schema({
    documento_empleado: {
        type: Number,
        required: true,
    },
    primerNombre: {
        type: String,
        required: true,
    },
    segundoNombre: {
        type: String,
        required: true,
    },
    primerApellido: {
        type: String,
        required: true,
    },
    segundoApellido: {
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