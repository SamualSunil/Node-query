const fs = require("fs");
const quotes = "The world is filled with full of darkness"
fs.writeFile("name.html",quotes,(err)=>{
    console.log("Completed Writing!!!")
})

for(i=0;i<=10;i++){
    fs.writeFile(`./backup/text-${i}.html`,quotes,(err)=>{
        console.log("Completed Writing!!!")
    })
}

// Read and Update file system
fs.readFile("./msg.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error");
    }
    console.log(data);
});

fs.appendFile("all-names.txt",quotes + "\n",(err)=>{
    console.log("completed Appending")
})