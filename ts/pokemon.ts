export class Pokemon {

    name: string;
    hp: number;
    speed: number;
    level: number;
    power: number;
    offA: number;
    defS: number;

    constructor(_name, _hp, _speed, _level, _power, _offA, _defS) {

        this.name = _name;
        this.hp = _hp;
        this.speed = _speed;
        this.level = _level;
        this.power = _power;
        this.offA = _offA;
        this.defS = _defS;

    }

}

function getRandomInt(max) {

    return Math.floor(Math.random() * Math.floor(max));

}

function attack(p1 : Pokemon) : number {

    const damage = (Math.floor(Math.floor(Math.floor(2 * p1.level / 5 + 2) * p1.offA * p1.power / p1.defS) / 50) + 2);
    p1.hp -= damage;
    return p1.hp;

}

export function firstToAttack(p1 : Pokemon, p2 : Pokemon): Pokemon {

    if (p1.speed >= p2.speed) {
        return p1;
    } else {
        return p2;
    }

}

export function fight(p1 : Pokemon, p2 : Pokemon): Pokemon {

    const firstPoke = firstToAttack(p1, p2);
    if (firstPoke == p1) {
        attack(p2);
    } else {
        attack(p1);
    }
    
    do {
        const randomPoke = getRandomInt(2)
        if (randomPoke%2 === 0) {
            attack(p1);
        } else {
            attack(p2);
        }
    } while (p1.hp <= 0 || p2.hp <= 0);

    if (p1.hp >= p2.hp) {
        return p1;
    } else {
        return p2;
    }

}