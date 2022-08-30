// REQUIRE DEPENDENCIES
const express = require('express');
const drinks = require("./models/drinks.js")


// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// DEFINE OUR ROUTES

app.get("/drinks/", (request, respond)=>{
    respond.send("Welcome to the Gitpub App!")
});

app.get("/drinks/", (request, respond)=>{
    respond.send('drinks')
});



// TELL OUR APP TO LISTEN ON PORT
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});