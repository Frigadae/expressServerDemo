const fs = require("fs");
const { nextTick } = require("process");
const logFile = "requestLog.log";

function print(req, res) {
    //initialise response code as null, it will be changed later
    let reqInfo = {
        "timestamp": new Date(),
        "method": req.method,
        "hostname": req.hostname,
        "parameters": req.params,
        "queries": req.query,
        "body": req.body,
        "responseCode": null,
    };
    
    res.on("finish", () => {
        //set the response code here before logging
        reqInfo.responseCode = res.statusCode; 

        console.log(`Request info: ${JSON.stringify(reqInfo)}`);
        console.log(`Response status: ${res.statusCode}`);

        try {
            fs.appendFile(logFile, JSON.stringify(reqInfo) + "\r\n", () => {
                console.log(`Request saved to ${logFile}`);
            });
        } catch (error) {
            console.log(error);
        }
    });    
}

exports.print = print;