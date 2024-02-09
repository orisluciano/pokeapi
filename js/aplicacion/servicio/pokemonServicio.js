import Pokemon from "../modelos/pokemon.js";

class PokemonServicio{
    url = "https://pokeapi.co/api/v2/pokemon?";
    limit = "limit=";
    offset = "&offset=";

    constructor(){}

    async getPokemon(limit, offset){
        let limite = this.limit + limit;
        let desde = this.offset + offset;
        let datos = this.url + limite + desde;
        let request = await fetch(datos);
        let json = await request.json();
        json.results.forEach(e => {
            this.getNumber(e.url);
        });
        let lista = []
        json.results.forEach(e => {
            let poke = new Pokemon(this.getNumber(e.url), e.name, e.url);
            lista.push(poke);
        });
        return lista;
    }

    getNumber(cadena){
        let parte = "pokemon/";
        let cortado = cadena.split(parte);
        let numSplit = cortado[1].split("/");
        return numSplit[0];
    }
}
export default PokemonServicio;