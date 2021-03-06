export function getRandomPokemon(pokemonArray) {
    
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}

export function findById(items, name){
    //Looping array
    for (let i = 0; i < items.length; i++){
        const item = items[i];

        if (name === items.id) {
            return item;
        }
    }
    return null;
}

export function getEncountered() {

    const emptyArray = '[]';
    const rawEncountered = localStorage.getItem('ENCOUNTERED') || emptyArray;
    const cart = JSON.parse(rawEncountered);

    return cart;
}