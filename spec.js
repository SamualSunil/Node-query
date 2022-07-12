const os = require("os");
console.log("Free memory",os.freemem());
console.log("Total Memory",os.totalmem());
console.log("version",os.version());
console.log("Processor",os.cpus());