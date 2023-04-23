const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({
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
        timestamps: true
    });

    userSchema.plugin(mongoosePaginate)

module.exports = model('users', userSchema);