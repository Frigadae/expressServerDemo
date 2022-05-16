const express = require("express");
const router = express.Router();
const logger = require("../utils/logger.js");
const login = require("../functions/login.js")
const validate = login.login;

router.use("*", (req, res, next) => {
    logger.print(req, res);
    next()
});

router.get("/", (req, res) => {
    let message = {"message": "welcome to the landing page"};
    res.status(200)
    res.type("json");
    res.send(message);
})

router.get("/index", (req, res) => {
    let message = {"message": "welcome to the landing page"};
    res.status(200)
    res.type("json");
    res.send(message);
})

router.post("/login", (req, res) => {
    let validate = signIn(req.body);
    let message = {"message": "you are logging in with: "};
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