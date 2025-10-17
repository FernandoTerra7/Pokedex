

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
const pokemonList = document.getElementById("lista-pokemon")

function convertPokemonLi(pokemon) {
    return`
        <li class="pokemon ${pokemon.types[0].type.name}">
            <p class="nome">${pokemon.name}</p>
            <a class="" href="https://pokemon.fandom.com/pt-br/wiki/${pokemon.name}" target="_blank">
                <img class="img-pokemon" id="img-pokemon" src="${pokemon.sprites.other.dream_world.front_default}" alt="Gengar">
            </a>
        </li> 
        `
}
function getPokemonDetails(pokemon){
    return fetch(pokemon.url)
        .then((response) => response.json())
}

fetch(url)
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse.results)
    .then((list) => list.map(getPokemonDetails))
    .then((details) => Promise.all(details))
    .then((newList)=> pokemonList.innerHTML = newList.map(convertPokemonLi).join(" ")) 
    .catch((error) => console.log(error))
