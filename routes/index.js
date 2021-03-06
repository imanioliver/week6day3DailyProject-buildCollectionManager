const express   = require("express");
const Pokemon    = require('../models/pokemon')
const router    = express.Router();

router.get("/", function(req, res){

    Pokemon.find({})
    .then(function(pokemons) {
        // console.log('stuff');
        // console.log(pokemons);
        res.render("home", {pokemonCatchInfo: pokemons});
    })
});

router.post('/', function (req, res){
    // console.log(req.body.type);
    // console.log(req.body.attacks);
    let newPokemon = {
        name: req.body.name,
        gender: req.body.gender,
        type: req.body.type,
        candy: req.body.candy,
        attacks: req.body.attacks,
        catchInfo: {
            city: req.body.city,
            state: req.body.state,
        },
        hp: req.body.hp,
        cp: req.body.cp,
    };

    Pokemon.create(newPokemon)
    .then(function(data){
        // console.log(data);
    })
    .catch(function(err){
        // console.log(err);
    })
    res.redirect('/');
})

router.post('/delete/', function(req, res){
    let name = req.body.name;
    // console.log(name);

      Pokemon.deleteOne({name:name})
      .then(function(data) {
          res.redirect('/')
        // console.log(data);
      })
      .catch(function(err) {
        // console.log(err);
      });
});

router.get('/edit/:name', function(req, res){

    let name = req.params.name;
    console.log(name);
    Pokemon.find({name: name})
    // console.log({name:name})
    .then(function(pokemon) {
        // console.log('stuff');
        console.log(pokemon);
        res.render("edit", {pokemonCatchInfo: pokemon});
    })
});

router.post('/edit/:name', function(req, res){

    let newPokemon = {
        name: req.body.name,
        gender: req.body.gender,
        type: req.body.type,
        candy: req.body.candy,
        attacks: req.body.attacks,
        catchInfo: {
            city: req.body.city,
            state: req.body.state,
        },
        hp: req.body.hp,
        cp: req.body.cp,
    };

let name = req.params.name

    Pokemon.update({name:name}, {
        name: req.body.name,
        gender: req.body.gender,
        type: req.body.type,
        candy: req.body.candy,
        attacks: req.body.attacks,
        catchInfo: {
            city: req.body.city,
            state: req.body.state,
        },
        hp: req.body.hp,
        cp: req.body.cp,
    }).then(function(data) {
        res.redirect('/');
    })

    //
    //

});


router.post('/:id', function (req, res){
    let id = req.params.id;
    // console.log(id, "the id");
    res.redirect('/');
});

module.exports = router;
