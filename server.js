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

app.delete('/pokemon/:id', (req, res)=>{
    res.send('deleting...');
});

//MongoDB
const Poke = mongoose.model('Pokemon', pokeSchema);

module.exports = Poke;

const Pokemon = require('./models/pokemon.js');

app.post('/pokemon/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});

app.get('/pokemon', (req, res)=>{
    res.send('Index');
});

const React = require('react');

class Index extends React.Component {
  render() {
    return <div><h1>Pokemon index page</h1></div>;
  }
}

module.exports = Index;

app.get('/Pokemon', (req, res)=>{
    res.render('Index');
});

app.get('/Pokemon', (req, res)=>{
    Fruit.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});

Pokemon.create(req.body, (error, createdPokemon)=>{
    res.redirect('/pokemon');
});

app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.send(foundPokemon);
    });
});

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.delete('/pokemon/:id', (req, res)=>{
    Poke.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon');
    });
});

app.get('/pokemon/:id/edit', (req, res)=>{
   Poke.findById(req.params.id, (err, foundPokemon)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{
    			fruit: foundPokemon
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.get('/pokemon/seed', (req, res)=>{
    Poke.create([
        {
            name:'Bulbasaur',
            color:'pink',
            readyToEat:true
        },
        {
            name:'Ivysaur',
            color:'purple',
            readyToEat:false
        },
        {
            name:'Venusaur',
            color:'green',
            readyToEat:true
        },
        {
            name:'Charmander',
            color:'blue',
            readyToEat:true
        },
        {
            name:'Charizard',
            color:'yellow',
            readyToEat:true
        },
        {
            name:'Orange',
            color:'green',
            readyToEat:true
        },
        {
            name:'Wartortle',
            color:'Red',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});

app.post('/pokemon/new', (req, res)=>{
    console.log('Create route accessed!');
    console.log('Req.body is: ', req.body);
    res.send(req.body);
});

// in your code
const PORT = process.env.PORT || 3000

// at the bottom
app.listen(PORT, () => {
  console.log('We in the building', PORT)
})