const mongoose      = require('mongoose');
mongoose.Promise    = require("bluebird");
const Schema        = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/pokemonDirectory");


const pokemonSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    gender: {type: String, required: true},
    type: {type: [String], required: true},
    candy: {type: String, required: true},
    attacks: [String],
    catchInfo: {
        city: String,
        state: String,
    },
    hp: {type: Number},
    cp: {type: Number},
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
