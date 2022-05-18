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

//serve static files found in public folder when needed
app.use(express.static('public'));

//use the express router
app.use("/", router.router);

//listens for http requests
app.listen(port, () => {
    console.log(`Server active on port: ${port}`);
});

