const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")
const bodyParser = require("body-parser")

//Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    next()
})

//serves up static files, CSS, client javascript, all that jazz.
app.use(express.static("public"));

// Server is running at this port
app.listen(port, function () {
    console.log("Server is runnin' on port 3000")
});

//Root route...get it?
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!")
})

//This is the landing page I want them to go to 
app.get("/pokemon/", (req, res) => {
    res.render("index.ejs", {
        pokemon: pokemon
    })
//    console.log(pokemon)
})

//pulls data from array and places it on the webpage
app.get("/pokemon/:id", (req, res) => {
    res.render("shows.ejs", {
        pokemon: pokemon[req.params.id]
    })
   
//    console.log(pokemon[req.params.id])
})
