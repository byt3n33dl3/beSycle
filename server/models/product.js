const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    image: { type: String, required: false } // URL to the image
});

module.exports = mongoose.model('Product', ProductSchema);
