function getPokemons() {
    return [
        {
            nome: 'Pikachu',
            tipo: 'Electric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            nome: 'Squirtle',
            tipo: 'Water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        },
    ]
}
var listaPokemons = getPokemons();
var cardTemplate = document.getElementById("cardTemplate");


function salvar(event) {
    event.preventDefault();
    var adicionarPokemon = {

        nome: document.getElementById("nome").value,
        tipo: document.getElementById("tipo").value,
        imagem: document.getElementById("imagem").value,
    }
    listaPokemons.push(adicionarPokemon);
    getPokemonCard();
}

function cleanPokemonCards() {
    while(containerpokemon.hasChildNodes()) {
        containerpokemon.removeChild(containerpokemon.firstChild);
    }
}

function getPokemonCard() {
    cleanPokemonCards();
    for (let index = 0; index < listaPokemons.length; index++) {
        var pokemon = listaPokemons[index];
        var card = cardTemplate.content.cloneNode(true).getElementById("card").outerHTML;

            card = card.replace(/{{nome}}/g, pokemon.nome);
            card = card.replace(/{{tipo}}/g, pokemon.tipo);
            card = card.replace(/{{imagem}}/g, pokemon.imagem);
            containerpokemon.innerHTML += card;
    }       
}   