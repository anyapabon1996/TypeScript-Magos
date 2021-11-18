"use strict";
var ordenDeMerlin;
(function (ordenDeMerlin) {
    ordenDeMerlin[ordenDeMerlin["primeraclase"] = 0] = "primeraclase";
    ordenDeMerlin[ordenDeMerlin["segundaClase"] = 1] = "segundaClase";
    ordenDeMerlin[ordenDeMerlin["terceraClase"] = 2] = "terceraClase";
    ordenDeMerlin[ordenDeMerlin["noPosee"] = 3] = "noPosee";
})(ordenDeMerlin || (ordenDeMerlin = {}));
var hechizo = /** @class */ (function () {
    function hechizo(name, clasificacion, mortal) {
        this.name = name;
        this.clasificacion = clasificacion;
        this.mortal = mortal;
    }
    ;
    hechizo.prototype.usoEnBatalla = function () {
        if (this.mortal)
            return this.name + ": es un hechizo mortal. Para enemigos.";
        else if (this.clasificacion == 2)
            return this.name + " no es un hechzo mortal, pero es peligroso. Precaucion.";
        else if (this.clasificacion == 1)
            return this.name + " es un hechizo intermedio. Puede ser usado en batalla para neutralizar o noquear al oponente";
        else
            return this.name + " es un hechizo basico. No se recomienda usar en batalla, pero depende de tu astucia";
    };
    return hechizo;
}());
var mago = /** @class */ (function () {
    function mago(name, orden, hechizos, categoria) {
        this.name = name;
        this.orden = orden;
        this.hechizos = hechizos;
        this.categoria = categoria;
    }
    ;
    //se enfrenta el poder de dos magos en batalla
    mago.prototype.enfrentamiento = function (otroMago, hechizoAEnfrentar1, hechizoAEnfrentar2) {
        if (this.hechizos[hechizoAEnfrentar1].clasificacion > otroMago.hechizos[hechizoAEnfrentar2].clasificacion)
            console.log("Gana " + this.name);
        else if (this.hechizos[hechizoAEnfrentar1].clasificacion < otroMago.hechizos[hechizoAEnfrentar2].clasificacion)
            console.log("Gana " + otroMago.name);
        else
            console.log('Es un empate');
    };
    return mago;
}());
//comparar la orden de merlin de dos magos 
var comparaOrdenDeMerlin = function (orden1, orden2) {
    if (orden1 > orden2)
        return 2;
    else if (orden1 < orden2)
        return 1;
    else
        return 0;
};
//compara a dos magos en varias categorias
var comparaPoderDeMagos = function (hechicero1, hechicero2) {
    var comparaOrden = comparaOrdenDeMerlin(hechicero1.orden, hechicero2.orden);
    //compara el nivel de poder 
    if (hechicero1.categoria.rango > hechicero2.categoria.rango)
        console.log(hechicero1.name + " es un mago m\u00E1s poderoso que " + hechicero2.name);
    else if (hechicero1.categoria.rango == hechicero2.categoria.rango)
        console.log("Los dos magos est\u00E1n igualados en poder");
    else
        console.log(hechicero2.name + " es un mago m\u00E1s poderoso que el mago " + hechicero1.name);
    //compara la orden de merlin
    if (comparaOrden == 1)
        console.log(hechicero1.name + " tiene una orden de Merlin mayor a " + hechicero2.name);
    else if (comparaOrden == 2)
        console.log(hechicero2.name + " tiene una orden de Merlin mayor a " + hechicero1.name);
    else
        console.log('Ambos hechiceros tienen la misma orden de Merlin');
};
//instanciamos algunos hechizos
var expelliarmus = new hechizo('Expelliarmus', 1, false);
var sectumsempra = new hechizo('Sectumsempra', 2, true);
var levitar = new hechizo('Wingardium Leviosa', 0, false);
var desmaius = new hechizo('Desmaius', 1, false);
var asesinar = new hechizo('Avada Kedavra', 2, true);
var crucio = new hechizo('Cruciatus', 2, false);
//instanciamos algunos magos
var Dumbledore = new mago('Albus Dumbledore', ordenDeMerlin.primeraclase, [expelliarmus, sectumsempra, levitar, desmaius], { rango: 2, escuela: 'Griffindor' });
var Voldemort = new mago('Tom Riddle', ordenDeMerlin.noPosee, [asesinar, sectumsempra, desmaius, crucio], { rango: 2, escuela: 'Slytherin' });
var Newton = new mago('Newton Scamander', ordenDeMerlin.segundaClase, [desmaius, levitar, expelliarmus, asesinar], { rango: 1, escuela: 'Hufflepuff' });
var Lockhart = new mago('Gilderoy Lockhart', ordenDeMerlin.terceraClase, [desmaius, expelliarmus, levitar], { rango: 0, escuela: 'Ravenclaw' });
console.log('Cómo va Lautaro. Vos move los magos que queres enfrentar o compara, segun sea el caso.');
//comparamos a dos magos cualesquiera. 
comparaPoderDeMagos(Dumbledore, Voldemort);
comparaPoderDeMagos(Dumbledore, Newton);
//Enfrentamos a dos magos cualesquiera. Los numeros enteros corresponden a la posicion de un hechizo x en el array correspondiente. 
Dumbledore.enfrentamiento(Voldemort, 1, 1);
Dumbledore.enfrentamiento(Lockhart, 3, 2);
