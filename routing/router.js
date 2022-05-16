const express = require("express");
const router = express.Router();
const path = require("path");
const logger = require("../utils/logger.js");
const login = require("../functions/login.js")
const validate = login.login;
const logout = login.logout;

router.use("*", (req, res, next) => {
    logger.print(req, res);
    next()
});

router.get("/", (req, res) => {
    let message = {"message": "welcome to the landing page"};
    res.status(200)
    res.type("html");
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/index", (req, res) => {
    let message = {"message": "welcome to the landing page"};
    res.status(200)
    res.type("json");
    res.send(message);
})

router.post("/login", (req, res) => {
    let message = validate(req.body);
    res.status(200)
    res.type("json");
    res.send(message);
})

router.all("*", (req, res) => {
    let message = {"message": "invalid path"};
    res.status(400)
    res.type("json");
    res.send(message);
});

exports.router = router;