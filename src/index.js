const express = require("express");
require("../Database/dbconnection.js");
const model = require("../model/Model.js");
const server = express();

// accept the result in jshon format
server.use(express.json());



// post method for IMDB
server.post("/imdb", async(req, res) => {
    try {
        const type1 = new model(req.body);
        console.log(req.body);
        const fetch = await type1.save();
        res.status(201).send(fetch);
    } catch (err) {
        res.send(err);
    }
});



// add the get request...
server.get("/imdb", async(req, res) => {
    try {
        const fetch = await model.find();
        res.send(fetch);
    } catch (err) {
        res.status(404).send(err);
    }
})


// get by name... (move this above the ID route)
server.get("/imdb/name/:name", async(req, res) => {
    try {
        const name = req.params.name;
        // Assuming 'name' is the field you're searching for in your database
        const usename = await model.findOne({ name: name });
        if (usename) {
            res.send(usename);
        } else {
            res.status(404).send({ message: "Name not found" });
        }
    } catch (err) {
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// get request by id (this stays below the name route)
server.get("/imdb/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const useid = await model.findById(id);
        if (useid) {
            res.send(useid);
        } else {
            res.status(404).send({ message: "ID not found" });
        }
    } catch (err) {
        res.status(404).send(err);
    }
});




server.get("/about", (req, res) => {
    res.send("hii i am in the about page...");
});




server.listen(7000, () => {
    console.log("connected to server...");
});