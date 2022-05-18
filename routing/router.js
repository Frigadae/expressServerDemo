const express = require("express");
const router = express.Router();
const path = require("path");
const logger = require("../utils/logger.js");
const login = require("../functions/login.js")
const validate = login.login;

router.use("*", (req, res, next) => {
    logger.print(req, res);
    next()
});

//sends a json object
router.get("/", (req, res) => {
    let message = {
        "message": "welcome to localhost", 
        "dateSent": new Date().toLocaleDateString(),
        "info": "please navigate to /index for a full list of available paths",
    };
    res.status(200);
    res.type("json");
    res.send(message);
})

//serve the index.html page
router.get("/index", (req, res) => {
    res.status(200)
    res.type("html");
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

//sends an example JSON object
router.get("/example", (req, res) => {
    let message = {
        "message": "this is an example JSON object", 
        "dateSent": new Date().toLocaleDateString(),
    };
    res.status(200);
    res.type("json");
    res.send(message);
})

//sends a post request with a json body
//test this in postman
router.post("/login", (req, res) => {
    let message = validate(req.body);
    res.status(200);
    res.type("json");
    res.send(message);
})

//invalid path
router.all("*", (req, res) => {
    let message = {"message": "invalid path"};
    res.status(400);
    res.type("json");
    res.send(message);
});

exports.router = router;