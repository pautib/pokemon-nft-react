const pokeApiRoot = 'https://pokeapi.co/api/v2/pokemon/';
const pokeApiAllPokemonRoot =  pokeApiRoot + '?limit=2000';


async function getAllPokemonList() {
    return fetch(pokeApiAllPokemonRoot)
        .then((response) => response.json())
        .then(bodyResp => bodyResp.results)
        .catch(error => {
                console.error(error);
                throw new Error(`Could not fetch entire Pokemon List`);
            }
        );
}

async function getPokemonCardDetails(pokemon) {

    let chosenImg = "./whos.png";

    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(bodyResp => bodyResp)
        .then(res => {
            
            if (res.sprites.front_default) {
                chosenImg = res.sprites.front_default;
            }
            
            if (res.sprites.other['official-artwork'].front_default) {
                chosenImg = res.sprites.other['official-artwork'].front_default;
            }

            if (res.sprites.other.home.front_default) {
                chosenImg = res.sprites.other.home.front_default;
            }

            return { 
                id: res.id,
                name: res.name,
                imgUrl: chosenImg,
                height: res.height,
                weight: res.weight,
            }
        })
        .catch(error => {
            console.error(error);
            throw new Error(`Cannot fetch ${pokemon.name} details from ${pokemon.url}`);
        });
}

export const getPokemonListDetails = async() => {

    let pokemonFiltered = await getAllPokemonList();

    const pokemonCardsList = await Promise.all(
        pokemonFiltered.map( (pokemon) => { return getPokemonCardDetails(pokemon); })
    );

    return pokemonCardsList;

}