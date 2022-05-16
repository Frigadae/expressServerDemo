const express = require("express");
const app = express();
const path = require("path");
const router = require("./routing/router.js");
const favicon = require("serve-favicon");
const port = 3000;

app.use(express.urlencoded({"extended": true}));

//parse body as json
app.use(express.json());

//serve favicon.ico found in the public folder
app.use(favicon(__dirname + "/public/favicon.ico")); 
app.use("/", router.router);

app.listen(port, () => {
    console.log(`Server active on port: ${port}`);
});

