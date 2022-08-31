// REQUIRE DEPENDENCIES
const express = require("express");
const drinks = require("./models/drinks.js")
const food = require("./models/food.js");

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// DEFINE OUR ROUTES

app.get("/", (request, respond) => {
    respond.send("Welcome to the Gitpub App!")
});

app.get("/drinks", (request, respond) => {
    respond.render("drinks_index.ejs", {
        allDrinks: drinks
    })
});

app.get("/food", (request, respond) => {
    respond.render("food_index.ejs", {
        allFood: food
    })
});

// CREATE A SHOW ROUTE
app.get("/drinks/:id", (request, response) => {
    response.render("drinks_show.ejs", {
        drink: drinks[request.params.id]
    })
});

app.get("/food/:id", (request, respond) => {
    respond.render("food_show.ejs", {
        foods: food[request.params.id]
    })
});


// TELL OUR APP TO LISTEN ON PORT
app.listen(port, () => {
    console.log(`listening on port `, port)
});