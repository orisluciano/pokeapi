import PokemonServicio from "../../aplicacion/servicio/pokemonServicio.js";

class PantallaPrincipal{
    ids = {
        root : "root",
        tabla : "tabla"
    };
    archivo = "./html/principal/principal.html";
    pokeService = new PokemonServicio();

    async fetchForm(){
        let form = await fetch(this.archivo);
        let root = document.getElementById(this.ids.root);
        root.innerHTML = await form.text();
        this.cargarDatos();
    }

    async cargarDatos(){
        let request = await this.pokeService.getPokemon(10,0);
        this.cargarTabla(request);
    }

    cargarTabla(datos){
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
                        col.append(img);
                    }else{
                        col.innerHTML = e[k];
                    }   
                }
                r.append(col);
            });
        });
    }
}
export default PantallaPrincipal;