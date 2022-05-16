const express = require("express");
const app = express();
const router = require("./routing/router.js");
const favicon = require("serve-favicon");
const port = 3000;

app.use(express.urlencoded({"extended": true}));
app.use(favicon(__dirname + "/public/" + "favicon.ico")); 
app.use("/", router.router);

app.listen(port, () => {
    console.log(`Server active on port: ${port}`);
});

