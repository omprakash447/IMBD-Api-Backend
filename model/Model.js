const mongoose = require("mongoose");

// Define a sub-schema for the structure inside each category
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Create the model from the schema
const model = mongoose.model("myapi", categorySchema);

module.exports = model;