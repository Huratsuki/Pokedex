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
function getTiposPokemon() {
    return ["Steel", "Fire", "Grass", "Electric", "Water", "ice", "Ground", "Rock", "Fairy", "Poison", "Bug", "Dragon", "Psychic", "Flying", "Fighting", "Normal"];
}

var listaPokemons = getPokemons();
var listaTipos = getTiposPokemon();

function salvar(event) {
    event.preventDefault();
    var adicionarPokemon = {

        nome: document.getElementById("nome").value,
        tipo: document.getElementById("tipo").value,
        imagem: document.getElementById("imagem").value,
    }
    if (validarTipo()) {
        listaPokemons.push(adicionarPokemon);
        insertTable(adicionarPokemon);
        limparCampos();
        nome.focus();
    }
    else
        alert("Selecione o tipo do pokemon");
}

function insertTable(pokemon) {

    var tbody = document.getElementById("t-body");
    var tr = tbody.insertRow();

    var tdNome = tr.insertCell();
    tdNome.innerText = pokemon.nome;

    let tdTipo = tr.insertCell();
    var badge = document.createElement("span");
    badge.className = pokemon.tipo;
    badge.id = "badge"
    badge.innerText = pokemon.tipo;
    tdTipo.appendChild(badge);

    let tdImagem = tr.insertCell()
    var img = document.createElement("img");
    img.src = `${pokemon.imagem}`;
    img.style.height = '60px';
    tdImagem.appendChild(img);

    let tdRemover = tr.insertCell();
    tdRemover.className = "align-remove-button";

    var button = document.createElement("a");
    button.innerHTML = "<i class='fa-solid fa-trash fa-xl'></i>";
    button.title = "Remover pokemon";
    button.id = "removeButton"
    button.onclick = function () {
        removerPokemon(pokemon.nome);
    }
    tdRemover.appendChild(button);
    console.log(tdTipo)
}

function limpar() {
    var tbody = document.getElementById("t-body");
    tbody.innerHTML = "";
}

function removerPokemon(nomePokemon) {
    var confirmacao = confirm('Tem certeza que deseja excluir o pokemon?');

    if (confirmacao) {
        listaPokemons = listaPokemons.filter(item => item.nome !== nomePokemon);
        iniciar();
        alert(`O pokemon ${nomePokemon} for removido da sua pokedex`);
    }

}

function iniciar() {
    limpar();
    for (let index = 0; index < listaPokemons.length; index++) {
        var pokemon = listaPokemons[index];
        insertTable(pokemon);
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("tipo").value = "Selecione o Tipo";
    document.getElementById("imagem").value = "";
}

function validarTipo() {
    inputTipo = document.getElementById("tipo").value;
    if (inputTipo == "Selecione o Tipo") {
        return false
    }
    else {
        return true
    }
}

iniciar();
montarTipos();

function montarTipos() {
    var tipos = getTiposPokemon();
    var tipoPokemon = document.getElementById("tipo");
    for (let index = 0; index < tipos.length; index++) {
        const element = tipos[index];
        var option = document.createElement("option");
        option.text = element;
        tipoPokemon.add(option);
    }
}