"use strict";

exports.__esModule = true;

var Pokemon = /** @class */ (function () {

    function Pokemon(_name, _speed) {
        this.name = _name;
        this.speed = _speed;
    }
    return Pokemon;

}());

exports.Pokemon = Pokemon;

function firstToAttack(p1, p2) {

    if (p1.speed >= p2.speed) {
        return p1;
    } else {
        return p2;
    }
    
}

exports.firstToAttack = firstToAttack;