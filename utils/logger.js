const fs = require("fs");
const logFile = "requestLog.log";

function print(req, res) {
    let reqInfo = {
        "type": "request",
        "timestamp": new Date(),
        "method": req.method,
        "hostname": req.hostname,
        "parameters": req.params,
        "queries": req.query,
        "body": req.body,
    };

    let resInfo = {
        "type": "response",
        "timestamp": new Date(),
        "status": res.statusCode,
    }
    
    res.on("finish", () => {
        console.log(`Request info: ${JSON.stringify(reqInfo)}`);
        console.log(`Response status: ${res.statusCode}`);
        try {
            fs.appendFile(logFile, JSON.stringify(reqInfo) + "\r\n", () => {
                console.log(`Request saved to ${logFile}`);
            });
            fs.appendFile(logFile, JSON.stringify(resInfo) + "\r\n", () => {
                console.log(`Response saved to ${logFile}`);
            });
        } catch (error) {
            console.log(error);
        }
    });    
}

exports.print = print;