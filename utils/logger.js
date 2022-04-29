function print(req) {
    console.log("-+-+-+-+-+-"); 
    console.log(`Request made at ${new Date()}`);
    console.log(req.params); 
    console.log(req.query); 
    console.log("-+-+-+-+-+-"); 
}

exports.print = print;