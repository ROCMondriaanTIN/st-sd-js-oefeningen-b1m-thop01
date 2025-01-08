const pokename = prompt("welke pokemon").toLocaleLowerCase();

fetch("https://pokeapi.co/api/v2/pokemon/" + pokename)
    .then(value => value.json())
    .then(value => show(value));

    function show(pokemon){
        console.log(pokemon);
        const pokemonNameElement = document.querySelector(".pokemon");
        pokemonNameElement.textContent = pokemon.name;
        pokemonNameElement.innerHTML += 
        `<img src="${pokemon.sprites.front_default}">`
        pokemonNameElement.innerHTML += 
        `<img src="${pokemon.sprites.front_shiny}">`

    }



const memoryCard = [];
memoryCard.push("lego", "lego.jpg");
memoryCard.push("lego", "lego.jpg");
memoryCard.push("lego", "lego.jpg");
memoryCard.push("lego", "lego.jpg");
memoryCard.push("lego", "lego.jpg");


function makeCard(cardName, img){
    const card = {
        cardname,
        img
    }
    return card;
}
