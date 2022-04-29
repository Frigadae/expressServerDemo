const express = require("express");
const router = express.Router();
const logger = require("../utils/logger.js");

router.use("*", (req, res, next) => {
    logger.print(req);
    next()
});

router.all("*", (req, res) => {
    let message = {"message": "Acknowledged"};
    res.status(200)
    res.type("json");
    res.send(message);
});

exports.router = router;