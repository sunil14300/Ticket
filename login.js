const mysql=require('mysql2');
const express=require('express');

const app=express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// set port

app.get("/",function(req,res){
    res.sendFile(__dirname,"./index.html")
})

app.listen(4500);