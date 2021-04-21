const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    //console.log(req.body.num1);

    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = Number(num1) + Number(num2);

    res.send("The result of the calculation is " + result);
})

app.listen(port, function(){
    console.log("Server started on port " + port);
});