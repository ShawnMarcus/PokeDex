// Pokedex Project

// selecting the element with the id of container
const pokeContainer = document.querySelector(`#container`);

// Using the first Pokeman they have on the API
const numOfPokemon = 150;

// creating 3 different function. final function loops through all.

//This function creates a new section element (card) then we add it to the webpage (inside the div with the id of container)
function creatPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    //adding a class to it
    pokeCard.classList.add(`pokemon`);

    //adding a new pokeCard each time
    pokeContainer.append(pokeCard)
    // accessing sprites key to get images (using front-shiny option just because it has the most options available)
    // typing out a string of HTML (Like what we commented out). We are setting the innerHTML for the new card we are creating. We are using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
    pokeCard.innerHTML = `
    <div class="img-container">`
    // the data that is returned to us is inside the data key
    // the image is inside the sprites key (specifically inside the front_shiny key).
    // the alt is the data again, but this time we are accessing the name key specifically
    // the value/argument that will be passed in for the pokemon parameter will be the response received from an Axios request to the Poke API
    `<img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" >
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}