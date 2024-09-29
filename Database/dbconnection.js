const mongoose = require("mongoose");


// create a connection...
mongoose.connect("mongodb://localhost:27017/MoveiApi")
    .then(() => {
        console.log("connected to the mongodb...");
    })
    .catch((err) => {
        console.log(err);
    });