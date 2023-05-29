const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const subcategoriaSchema = new Schema({
    subcategoria: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

    //facturaSchema.plugin(mongoosePaginate)

module.exports = model('subcategoria', subcategoriaSchema);