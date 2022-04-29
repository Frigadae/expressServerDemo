const fs = require("fs");
const logFile = "requestLog.log";

function print(req, res) {
    let reqInfo = {
        "timestamp": new Date(),
        "method": req.method,
        "hostname": req.hostname,
        "parameters": req.params,
        "queries": req.query
    };
    
    res.on("finish", () => {
        console.log(`Request info: ${JSON.stringify(reqInfo)}`);
        console.log(`Response status: ${res.statusCode}`);
    }) 

    try {
        fs.appendFile(logFile, JSON.stringify(reqInfo) + "\r\n", () => {
            console.log(`Request saved to ${logFile}`);
        });
    } catch (error) {
        console.log(error);
    }
    
}

exports.print = print;