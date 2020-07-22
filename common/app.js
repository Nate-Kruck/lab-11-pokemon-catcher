// import functions and grab DOM elements
import { pokemonData } from './pokemon-data.js';
import { getRandomPokemon, findById } from './utils.js';
// initialize state


const totalPokemon = document.getElementById('total-pokemon');
const nextButton = document.getElementById('next-container');
let remainingPokemon = pokemonData.slice();
let capturedPokemon = [];

let rounds = 0;


// set event listeners to update state and DOM




function setPage() {
    
    
    
    
    let pokemon1 = getRandomPokemon(remainingPokemon);
    let pokemon2 = getRandomPokemon(remainingPokemon);
    let pokemon3 = getRandomPokemon(remainingPokemon);

    while (pokemon1.id === pokemon2.id || pokemon1.id === pokemon3.id || pokemon2.id === pokemon3.id) {
        pokemon2 = getRandomPokemon(remainingPokemon);
        pokemon3 = getRandomPokemon(remainingPokemon);
    }

    //console.log(pokemon1);
    //console.log(pokemon2);
    //console.log(pokemon3);
    
    
    const pokemonLabel = document.querySelectorAll('label');
    
    const pokemonLabel1 = pokemonLabel[0];
    const pokemonInput1 = pokemonLabel1.children[1];
    const pokemonImage1 = pokemonLabel1.children[2];
    const pokemonName1 = pokemonLabel1.children[0];
    
    //console.log(pokemonName1);

    
    
    pokemonInput1.value = pokemon1.id;
    pokemonImage1.src = pokemon1.url_image;
    pokemonName1.textContent = pokemon1.pokemon;
    

    pokemonInput1.addEventListener('click', eventHandler); 


    
    /* label2 */
    const pokemonLabel2 = pokemonLabel[1];
    const pokemonInput2 = pokemonLabel2.children[1];
    const pokemonName2 = pokemonLabel2.children[0];
    const pokemonImage2 = pokemonLabel2.children[2];


    pokemonInput2.value = pokemon1.id;
    pokemonImage2.src = pokemon2.url_image;
    pokemonName2.textContent = pokemon2.pokemon;

    
    
    //console.log(pokemonName2);

    pokemonInput2.addEventListener('click', eventHandler);
    
    
    /* label3 */
    const pokemonLabel3 = pokemonLabel[2];
    const pokemonInput3 = pokemonLabel3.children[1];
    const pokemonName3 = pokemonLabel3.children[0];
    const pokemonImage3 = pokemonLabel3.children[2];
    
    
    pokemonInput3.value = pokemon3.id;
    pokemonImage3.src = pokemon3.url_image;
    pokemonName3.textContent = pokemon3.pokemon;
    
    pokemonInput3.addEventListener('click', eventHandler);
}


function eventHandler(e) {
    //console.log(e.target.value);
} 


nextButton.addEventListener('click', () => {
    if (rounds === 10) {
        window.location = './results/index.html';
    }
    nextButton.disabled = true;
    
    
    const clickedPokemon = document.querySelector('input:checked');
    const userChoice = clickedPokemon.value;
    const pokemon = findById(remainingPokemon, userChoice.id);
    
    // resets radio button after next button is clicked everytime
    clickedPokemon.checked = false;
    rounds++;
    
    
    //console.log(userChoice);

    capturedPokemon.push(pokemon);
    //console.log(capturedPokemon);

    /*if (capturedPokemon.length === 10) {
        nextButton.disabled = true;
    }*/
    

    const stringEncountered = JSON.stringify(capturedPokemon);
    localStorage.setItem('ENCOUNTERED', stringEncountered);

    totalPokemon.textContent = `Total Pokemon: ${rounds}`;
   

    
    
    
    
    setPage();
    
});




//radioButton.forEach
setPage();