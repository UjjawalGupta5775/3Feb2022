const superhero = require("superheroes");
const supervillain = require("supervillains");

var mySuperhero = superhero.random();
var supervillinName = supervillain.random();

console.log("Superhero = " + mySuperhero);
console.log("Supervillain = " + supervillinName);
