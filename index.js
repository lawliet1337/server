const express = require('express');
const app = new express();
const mysql = require('mysql');
const cors = require('cors');

app.set("view engine","ejs");
app.get("/", function(req,res){
    res.render('pages/index');
});
app.get("/sobre", function(req,res){
    res.render('pages/about');
});
db = mysql.createPool({
    host: "192.168.0.54",
    user: "root",
    password: "123",
    database: "crudgames",
})

app.use(cors());
app.use(express.json());


app.listen(3001);
console.log('server is running...')