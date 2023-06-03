const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const facturaSchema = new Schema({
    codigo_factura: {
        type: Number,
        required: true,
    },
    documento_usuario: {
        type: Number,
        required: true,
    },
    documento_empleado: {
        type: Number,
        required: true,
    },
    id_categoria: {
        type: String,
        required: true,
    },
    id_pelicula:{
        type: String,
        required: true
    },
    fecha_venta:{
        type: Date,
        require: true,
    },
    total:{
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    });

    //facturaSchema.plugin(mongoosePaginate)

module.exports = model('factura', facturaSchema);