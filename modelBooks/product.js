import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
        maxlength: 2000
    },
    description: {
        type: 'string',
        required: true,
        maxlength: 2000
    },
    image: {
        type: 'string',
    },
    author: {
        type: 'string',
        required: true,
        maxlength: 2000
    },
    category: {
        type: 'string',
    }

}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)