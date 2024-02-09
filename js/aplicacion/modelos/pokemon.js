class Pokemon{
    numero;
    nombre;
    imagen;
    url;

    constructor(numero, nombre, url){
        this.numero = numero;
        this.nombre = nombre;
        this.imagen =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"  + this.numero + ".png";
        this.url = url;
    }
}
export default Pokemon