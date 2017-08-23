const express   = require("express");
const Pokemon    = require('../models/pokemon')
const router    = express.Router();

router.get("/", function(req, res){


        Pokemon.create({
            name: "Pikachu",
            gender: "Male",
            type: ["Electric"],
            candy: "Pikachu",
            attacks: ["Thunder Shock", "Discharge"],
            catchInfo: {
                city: "New York",
                state: "NY",
            },
            hp: 38,
            cp: 288,
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })


    res.render("listing");
});


module.exports = router;
