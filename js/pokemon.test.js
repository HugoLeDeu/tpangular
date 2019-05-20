"use strict";

exports.__esModule = true;

let pokemon = require("./pokemon");

let pikachu = new pokemon.Pokemon("Pikachu", 55);
let charmander = new pokemon.Pokemon("Charmander", 52);

test('first to attack', function () {
    it('Pikachu should attack first when against charmander', function () {
        expect(pokemon.firstToAttack(pikachu, charmander)).toBe(pikachu);
    });
});