import express from "express";

const app = express();
const port = 8000;
app.get("/",(req,res)=>{
    res.render('index',console.log("Hello word"))
});


var fs = require("Welcome.txt");
var createStream = fs.createWriteStream("Hello.txt");
createStream.end();


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})