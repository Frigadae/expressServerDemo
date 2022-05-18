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

//serve the index.html page which lists all the available request handlers 
router.get("/", (req, res) => {
    res.status(200)
    res.type("html");
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/index", (req, res) => {
    res.status(200)
    res.type("html");
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

//sends a post request with a json body
//test this in postman
router.post("/login", (req, res) => {
    let message = validate(req.body);
    res.status(200)
    res.type("json");
    res.send(message);
})

//invalid path
router.all("*", (req, res) => {
    let message = {"message": "invalid path"};
    res.status(400)
    res.type("json");
    res.send(message);
});

exports.router = router;