const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const categoriaSchema = new Schema({

    Nombre_categoria: {
        type: String,
        required: true,
    },
 
},
    {
        timestamps: true
    });

    //facturaSchema.plugin(mongoosePaginate)

module.exports = model('categoria', categoriaSchema);