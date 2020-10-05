const nameSearch = document.getElementById('nameSearch')
const numSearch = document.getElementById('numSearch')
let pokemons = [{num: "1", name: "Balbusar", type: "Grass, Poison", img: "pokemon_images/1.png"}, {num: "2", name: "Ivysaur", type: "Grass, Poison", img: "pokemon_images/2.png"}, 
                {num: "3", name: "Venusaur", type: "Grass, Poison", img: "pokemon_images/3.png"}, {num: "4", name: "Charmander", type: "Fire", img: "pokemon_images/4.png"}, 
                {num: "5", name: "Charmeleon", type: "Fire", img: "pokemon_images/5.png"}, {num: "6", name: "Charizard", type: "Fire, Flying", img: "pokemon_images/6.png"},
                {num: "7", name: "Squirtle", type: "Water", img: "pokemon_images/7.png"}, {num: "8", name: "Wartortle", type: "Water", img: "pokemon_images/8.png"}, 
                {num: "9", name: "Blastoise", type: "Water", img: "pokemon_images/9.png"}, {num: "10", name: "Caterpie", type: "Bug", img: "pokemon_images/10.png"}, 
                {num: "11", name: "Metapod", type: "Bug", img: "pokemon_images/11.png"}, {num: "12", name: "Butterfree", type: "Bug, Flying", img: "pokemon_images/12.png"},
                {num: "13", name: "Weedle", type: "Bug, Poison", img: "pokemon_images/13.png"}, {num: "14", name: "Kakuna", type: "Bug, Poison", img: "pokemon_images/14.png"}, 
                {num: "15", name: "Beedril", type: "Bug, Poison", img: "pokemon_images/15.png"}, {num: "16", name: "Pidgey", type: "Normal, Flying", img: "pokemon_images/16.png"}, 
                {num: "17", name: "Pidgeotto", type: "Normal, Flying", img: "pokemon_images/17.png"}, {num: "18", name: "Pidgeot", type: "Normal, Flying", img: "pokemon_images/18.png"},
                {num: "19", name: "Rattata", type: "Normal", img: "pokemon_images/19.png"}, {num: "20", name: "Raticate", type: "Normal", img: "pokemon_images/20.png"}];

numSearch.addEventListener('keyup', (e) => {
    matches = "";

    let deleteDiv = document.getElementById('blockdiv');
    if (deleteDiv !== null){
    deleteDiv.remove();
    }

    const searchNum = e.target.value;
    if (searchNum >= 1 && searchNum <=20){
    const filteredPokemon = pokemons.filter((pokemon) => {
        return (
            pokemon.num.includes(searchNum)
        );
    });
    for (i=0; i < filteredPokemon.length; i++){
        matches = matches + "\n\n" + filteredPokemon[i].num + ". " + filteredPokemon[i].name + "\n Type: " + filteredPokemon[i].type
    }
    let blockDiv = document.createElement('div');
    blockDiv.id = "blockdiv";
    blockDiv.className = "blockdiv";
    let ulElement = document.createElement('ul');
    ulElement.id = "myUl";
    blockDiv.appendChild(ulElement);
    const currentDiv = document.getElementById('oldPokemon');
    document.body.insertBefore(blockDiv, currentDiv);

    for (var j = 0; j < filteredPokemon.length; j++){
        let li = document.createElement('li');
        li.className = "pokemonListResults";
        let image = document.createElement('img');
        image.src = filteredPokemon[j].img;
        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(filteredPokemon[j].num + ". " + filteredPokemon[j].name))
        let p = document.createElement('p');
        p.appendChild(document.createTextNode("Type: " + filteredPokemon[j].type))

        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(p);

        let e = document.getElementById('myUl')
        e.appendChild(li);
    }
    }
    if (searchNum > 20){
    alert("ENTER A NUMBER BETWEEN 1 - 20!");
    }

    if (searchNum >= "a"){
    alert("ENTER A NUMBER BETWEEN 1 - 20!"); 
    }
});

nameSearch.addEventListener('keyup', (e) => {
    matches = "";
    let deleteDiv = document.getElementById('blockdiv');
    if (deleteDiv !== null){
    deleteDiv.remove();
    }
    const searchName = e.target.value;
    if (searchName >= 'a' && searchName <= 'z' && searchName.length < 20 || searchName >= 'A' && searchName <= 'Z' && searchName.length < 20 || searchName.length == 0){
    if (searchName.length > 0){
        const filteredPokemon = pokemons.filter((pokemon) => {
        return (
            pokemon.name.includes(searchName.toUpperCase()) || 
            pokemon.name.includes(searchName)
        );
    });
    for (i=0; i < filteredPokemon.length; i++){
        matches = matches + "\n\n" + filteredPokemon[i].num + ". " + filteredPokemon[i].name + "\n Type: " + filteredPokemon[i].type
        if (i == 4){
            break;
        }
    }
    
    let blockDiv = document.createElement('div');
    blockDiv.id = "blockdiv";
    blockDiv.className = "blockdiv";
    let ulElement = document.createElement('ul');
    ulElement.id = "myUl";
    blockDiv.appendChild(ulElement);
    const currentDiv = document.getElementById('oldPokemon');
    document.body.insertBefore(blockDiv, currentDiv);

    for (var j = 0; j < filteredPokemon.length; j++){
        let li = document.createElement('li');
        li.className = "pokemonListResults";
        let image = document.createElement('img');
        image.src = filteredPokemon[j].img;
        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(filteredPokemon[j].num + ". " + filteredPokemon[j].name))
        let p = document.createElement('p');
        p.appendChild(document.createTextNode("Type: " + filteredPokemon[j].type))

        li.appendChild(image);
        li.appendChild(h3);
        li.appendChild(p);

        let e = document.getElementById('myUl')
        e.appendChild(li);
    }
}
    }

    else
    alert("PLEASE ENTER A VALID CHARACTER");
}

);


