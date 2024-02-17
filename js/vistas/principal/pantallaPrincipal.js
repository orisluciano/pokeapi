import PokemonServicio from "../../aplicacion/servicio/pokemonServicio.js";

class PantallaPrincipal{
    ids = {
        root : "root",
        tabla : "tabla",
        nombre : "nombre",
        numero : "numero",
        imagen : "imagen",
        botonera : "botonera"
    };
    archivo = "./html/principal/principal.html";
    pokeService = new PokemonServicio();
    desde = 0;
    cantidad = 10;

    async fetchForm(){
        let form = await fetch(this.archivo);
        let root = document.getElementById(this.ids.root);
        root.innerHTML = await form.text();
        this.cargarDatos();
    }

    async cargarDatos(){
        let request = await this.pokeService.getPokemon(this.cantidad, this.desde);
        this.cargarTabla(request);
    }

    cargarTabla(datos){
        let esto = this;
        let tabla = document.getElementById(this.ids.tabla);
        datos.forEach(e => {
            let r = document.createElement("tr");
            tabla.append(r);
            let keys = Object.keys(e);
            keys.forEach(k => {
                let col = document.createElement("td");
                if (k != "url") {
                    if (k == "imagen") {
                        let img = document.createElement("img");
                        img.src = e[k];
                        img.onclick = function() {
                            esto.mostrarPoke(e);
                        }
                        col.append(img);
                    }else{
                        col.innerHTML = e[k];
                    }   
                }
                r.append(col);
            });
        });
    }

    asignarFunciones(){}

    mostrarPoke(pokemon){
        let nombre = document.getElementById(this.ids.nombre);
        let numero = document.getElementById(this.ids.numero);
        let imagen = document.getElementById(this.ids.imagen);

        nombre.innerHTML = pokemon.nombre;
        numero.innerHTML = pokemon.numero;
        imagen.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + pokemon.numero +".png";
    }

    crearBotones(){
        let botonera = document.getElementById(this.ids.botonera);
        let mas = document.createElement("button");
        mas.innerHTML = "Mas";
        mas.onclick = function() {
            
        }
    }
}
export default PantallaPrincipal;