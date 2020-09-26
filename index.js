const nameSearch = document.getElementById('nameSearch')
const numSearch = document.getElementById('numSearch')
let pokemons = [{num: "1", name: "Balbusar", type: "Grass, Poison"}, {num: "2", name: "Ivysaur", type: "Grass, Poison"}, {num: "3", name: "Venusaur", type: "Grass, Poison"}, 
                {num: "4", name: "Charmander", type: "Fire"}, {num: "5", name: "Charmeleon", type: "Fire"}, {num: "6", name: "Charizard", type: "Fire, Flying"},
                {num: "7", name: "Squirtle", type: "Water"}, {num: "8", name: "Wartortle", type: "Water"}, {num: "9", name: "Blastoise", type: "Water"},
                {num: "10", name: "Caterpie", type: "Bug"}, {num: "11", name: "Metapod", type: "Bug"}, {num: "12", name: "Butterfree", type: "Bug, Flying"},
                {num: "13", name: "Weedle", type: "Bug, Poison"}, {num: "14", name: "Kakuna", type: "Bug, Poison"}, {num: "15", name: "Beedril", type: "Bug, Poison"},
                {num: "16", name: "Pidgey", type: "Normal, Flying"}, {num: "17", name: "Pidgeotto", type: "Normal, Flying"}, {num: "18", name: "Pidgeot", type: "Normal, Flying"},
                {num: "19", name: "Rattata", type: "Normal"}, {num: "20", name: "Raticate", type: "Normal"}];
let matches = "";

numSearch.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        matches = "";
    const searchNum = e.target.value;
    if (searchNum >= 1 && searchNum <=20){
    const filteredPokemon = pokemons.filter((pokemon) => {
        return (
            pokemon.num.includes(searchNum)
        );
    });
    for (i=0; i < filteredPokemon.length; i++){
        matches = matches + "\n\n" + filteredPokemon[i].num + ". " + filteredPokemon[i].name + "\n Type: " + filteredPokemon[i].type
        if (i == 4){
            break;
        }
    }
    alert(matches);
    }
    else
    alert("ENTER A NUMBER BETWEEN 1 - 20!");
}
});

nameSearch.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        matches = "";
    const searchName = e.target.value;
    if (searchName >= 'a' && searchName <= 'z' && searchName.length < 20|| searchName >= 'A' && searchName <= 'Z' && searchName.length < 20){
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
    alert(matches);
    }
    else
    alert("PLEASE ENTER A VALID CHARACTER");
}
});

