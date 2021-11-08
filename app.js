/*
// Pokedex Project

// selecting the element with the id of container
const pokeContainer = document.querySelector(`#container`);

// Using the first Pokeman they have on the API
const numOfPokemon = 150;

// creating 3 different function. final function loops through all.

//This function creates a new section element (card) then we add it to the webpage (inside the div with the id of container)
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    //adding a class to it
    pokeCard.classList.add(`pokemon`);

    //adding a new pokeCard each time
    pokeContainer.append(pokeCard);
    // accessing sprites key to get images (using front-shiny option just because it has the most options available)
    // typing out a string of HTML (Like what we commented out). We are setting the innerHTML for the new card we are creating. We are using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
    // the data that is returned to us is inside the data key
    // the image is inside the sprites key (specifically inside the front_shiny key).
    // the alt is the data again, but this time we are accessing the name key specifically
    // the value/argument that will be passed in for the pokemon parameter will be the response received from an Axios request to the Poke API
    pokeCard.innerHTML = `
    <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" >
  </div>
  <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
  `;
}

//We are going to use the function we created above (createPokeCard) inside this new function
// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createPokeCard function
// The argument/value passed into the "id" parameter will be a number created in the loop in the next function (AKA the getPokemon function).
async function getPokemonData(id){
    // value for id is going to change each time the function is run (1, 2, 3, etc...)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = await axios.get(url);
  console.log(pokemonData);
  console.log(pokemonData.data.sprites.front_shiny);
  console.log(pokemonData.data.name);
  createPokeCard(pokemonData);
}

// The getPokemon function loops through ALL the pokemon id's and runs/executes the getPokemonData function for each ID.
// using ASYNC / AWAIT on this function because the code in the getPokemonData function is asynchronous (there is an Axios request in that function)
async function getPokemon(){
    for(i = 1; i <= numOfPokemon; i++){
      console.log(i);
      await getPokemonData(i);
    }
  }
  // Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop.
  getPokemon();
  */
 // POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// Using the first 150 Pokemon (AKA Objects) in the PokeAPI
const numOfPokemon = 150;

// The createPokeCard function creates a new card (AKA Section element) and adds the new card to the webpage/document inside of the div with the id of "container"
// NOTE: The value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI
function createPokeCard(pokemon){
  const pokeCard = document.createElement(`section`);
  pokeCard.classList.add(`pokemon`);
  pokeContainer.append(pokeCard);
  // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
  pokeCard.innerHTML = `
  <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}" >
  </div>
  <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
  `;
}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the createPokeCard function
// NOTE: The argument/value passed into the "id" parameter will be a number created in the loop in the next function (AKA The getPokemon function)
async function getPokemonData(id){
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = await axios.get(url);
  console.log(pokemonData);
  console.log(pokemonData.data.sprites.front_shiny);
  console.log(pokemonData.data.name);
  createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
// NOTE: Using async/await on this function because the code in the getPokemonData function is asynchronous (There is an Axios request in that function)
async function getPokemon(){
  for(i = 1; i <= numOfPokemon; i++){
    console.log(i);
    await getPokemonData(i);
  }
}
// Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();