import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');
console.log(pokemonOfAsh[0].name);
// Which pokemon should Ash use?

console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Squirtle', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
for (let i = 0; i < pokemonOfAsh.length; i ++) {
     if (pokemonOfAsh[i].effectiveAgainst === wildPokemon.type) {
            console.log(pokemonOfAsh[i].name)
        }
}


// function initializePokemon(): Pokemon[] {
//     if (wildPokemon.type === 'leaf') {
//     return [new Pokemon('Charizard', 'fire', 'leaf')]
//     } else if (wildPokemon.type === 'water'){
//         return [new Pokemon('Balbasaur', 'leaf', 'water'),
//                 new Pokemon('Pikatchu', 'electric', 'water')]
//     } else {
//         return [new Pokemon('Squirtle', 'water', 'fire'),
//                 new Pokemon('Kingler', 'water', 'fire')]
//     }
// }    


        // new Pokemon('Balbasaur', 'leaf', 'water'),
        // new Pokemon('Pikatchu', 'electric', 'water'),
        // new Pokemon('Charizard', 'fire', 'leaf'),
        // new Pokemon('Squirtle', 'water', 'fire'),
        // new Pokemon('Kingler', 'water', 'fire')