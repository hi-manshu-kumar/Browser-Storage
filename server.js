const express = require("express");
const bodyparser = require("body-parser");
const appRoutes = require("./routes/routes.js");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({encoding:false}));
app.use(bodyparser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();  //compulsory so that control can use next middleware
})

app.use('/', appRoutes);

app.set('views', './view');

app.set('view engine', 'ejs');

app.use(function (req, res, next){
    res.send("Oops something wrong in url");
    next();
})

app.listen(1234, ()=> {
    console.log("server started at 1234....");
})