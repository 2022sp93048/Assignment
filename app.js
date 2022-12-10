const express = require("express");

const app = express();

const {Client} = require('pg');

const path = require('path')

const client = new Client({

    host: 'database-123.cmros6sszdfp.us-east-1.rds.amazonaws.com',

    port: 5432,

    user: 'postgres',

    password: 'Rajeev123',

    database: 'postgres'

});

client.connect();

var a = [];

client.query(`SELECT * FROM public."Scholars"`, (err, res) => {

    if (err) {

    console.error(err);
    return;

    }

    a=res.rows;

    client.end();

});

console.log(a);


app.use(express.static(__dirname));



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));

});



app.get("/details", function (req, res) {
  console.log(a);
  scholarDetails = [
    { Name: a[0].Name, RollNo: 42138, College: 'BITS' },
    { Name: a[1].Name, RollNo: 38, College: 'BITS' },
    { Name: a[2].Name, RollNo: 60, College: 'BITS' }
  ]
   res.json(scholarDetails);
});


// app.get('/randomSentense' , (req,res)=>{

   

//     //  res.json(getRandomSentense());

//  })



app.listen(3000, function () {

  console.log("Server is running on localhost3000");

});



