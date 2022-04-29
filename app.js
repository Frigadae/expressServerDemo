const express = require("express");
const app = express();
const router = require("./routing/router.js");
const port = 3000;

app.use(express.urlencoded());
app.use("/", router.router);

app.listen(port, () => {
    console.log(`Server active on port: ${port}`);
});

