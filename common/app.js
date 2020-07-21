// import functions and grab DOM elements
import { pokemonData } from './pokemon-data.js';
import { getRandomPokemon } from './utils.js';
// initialize state

const radioButton = document.querySelectorAll('input');

let pokemonDataCopy = pokemonData.slice();
let capturedPokemon = 0;


// set event listeners to update state and DOM

function setPage() {
    if (capturedPokemon === 10) {
        alert('You have caught 10 Pokemon, lets go check em out!');
    }
    let pokemon1 = getRandomPokemon(pokemonDataCopy);
    let pokemon2 = getRandomPokemon(pokemonDataCopy);
    let pokemon3 = getRandomPokemon(pokemonDataCopy);

    while (pokemon1.id === pokemon2.id || pokemon1.id === pokemon3.id || pokemon2.id === pokemon3.id) {
        pokemon2 = getRandomPokemon(pokemonDataCopy);
        pokemon3 = getRandomPokemon(pokemonDataCopy);
    }

    console.log(pokemon1);
    console.log(pokemon2);
    console.log(pokemon3);
    

    const pokemonLabel = document.querySelectorAll('label');

    const pokemonLabel1 = pokemonLabel[0];
    const pokemonInput1 = pokemonLabel1.children[1];
    const pokemonImage1 = pokemonLabel1.children[2];


    pokemonInput1.value = pokemon1.id;
    pokemonImage1.src = pokemon1.url_image;

    pokemonInput1.addEventListener('click', eventHandler);



    /* label2 */
    const pokemonLabel2 = pokemonLabel[1];
    const pokemonInput2 = pokemonLabel2.children[1];
    const pokemonImage2 = pokemonLabel2.children[2];


    pokemonInput2.value = pokemon1.id;
    pokemonImage2.src = pokemon2.url_image;

    pokemonInput2.addEventListener('click', eventHandler);


    /* label3 */
    const pokemonLabel3 = pokemonLabel[2];
    const pokemonInput3 = pokemonLabel3.children[1];
    const pokemonImage3 = pokemonLabel3.children[2];


    pokemonInput3.value = pokemon3.id;
    pokemonImage3.src = pokemon3.url_image;

    pokemonInput3.addEventListener('click', eventHandler);

}
setPage();

function eventHandler(e) {
const whatUserClicked = e.target.value;
}
