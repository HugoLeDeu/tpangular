import { Pokemon, firstToAttack, fight } from './pokemon'

let pikachu = new Pokemon("Pikachu", 55, 12, 10,8,6,4)
let charmander = new Pokemon("Charmander", 52,10,8,6,4,2)

test('first to attack', () => {
    it('Pikachu should attack first when against charmander', () => {
        expect(firstToAttack(pikachu, charmander)).toBe(pikachu)
    })
})

test('first to attack', () => {
    it('Pikachu should win against charmander', () => {
        expect(fight(pikachu, charmander)).toBe(pikachu)
    })
})
