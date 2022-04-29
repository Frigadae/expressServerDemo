const express = require("express");
const router = express.Router();
const logger = require("../utils/logger.js");

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

router.all("*", (req, res) => {
    let message = {"message": "invalid path"};
    res.status(400)
    res.type("json");
    res.send(message);
});

exports.router = router;