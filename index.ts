enum ordenDeMerlin {
    primeraclase,
    segundaClase, 
    terceraClase,
    noPosee
}

interface ICategoria {
    rango: number,
    escuela: String
}

class hechizo {

    constructor(public name: String,
        public clasificacion: number,
        public mortal :boolean){};


    public usoEnBatalla():String {
        if (this.mortal) return `${this.name}: es un hechizo mortal. Para enemigos.`;

        else if (this.clasificacion == 2) return `${this.name} no es un hechzo mortal, pero es peligroso. Precaucion.`;
        
        else if (this.clasificacion == 1) return  `${this.name} es un hechizo intermedio. Puede ser usado en batalla para neutralizar o noquear al oponente`
        
        else return `${this.name} es un hechizo basico. No se recomienda usar en batalla, pero depende de tu astucia`;
    }
}

class mago {
    constructor (
        public name: String,
        public orden: ordenDeMerlin,
        public hechizos :hechizo[],
        public categoria :ICategoria
    ){};

    //se enfrenta el poder de dos magos en batalla
    enfrentamiento (otroMago :mago, hechizoAEnfrentar1 :number, hechizoAEnfrentar2 :number){
        if (this.hechizos[hechizoAEnfrentar1].clasificacion > otroMago.hechizos[hechizoAEnfrentar2].clasificacion) console.log(`Gana ${this.name}`);
        else if (this.hechizos[hechizoAEnfrentar1].clasificacion < otroMago.hechizos[hechizoAEnfrentar2].clasificacion) console.log(`Gana ${otroMago.name}`);
        else console.log('Es un empate'); 
    }
}

//comparar la orden de merlin de dos magos 
const comparaOrdenDeMerlin = (orden1 :ordenDeMerlin, orden2 :ordenDeMerlin) :number =>{
    if (orden1 > orden2) return 2
    else if (orden1 < orden2) return 1
    else return 0
}

//compara a dos magos en varias categorias
const comparaPoderDeMagos = (hechicero1 :mago, hechicero2 :mago) :void => {
    let comparaOrden :number = comparaOrdenDeMerlin (hechicero1.orden, hechicero2.orden); 
    
    //compara el nivel de poder 
    if (hechicero1.categoria.rango > hechicero2.categoria.rango) 
        console.log(`${hechicero1.name} es un mago más poderoso que ${hechicero2.name}`);

    else if (hechicero1.categoria.rango == hechicero2.categoria.rango) 
        console.log(`Los dos magos están igualados en poder`);

    else 
        console.log (`${hechicero2.name} es un mago más poderoso que el mago ${hechicero1.name}`);

    //compara la orden de merlin
    if (comparaOrden == 1) console.log(`${hechicero1.name} tiene una orden de Merlin mayor a ${hechicero2.name}`);
    else if(comparaOrden == 2) console.log(`${hechicero2.name} tiene una orden de Merlin mayor a ${hechicero1.name}`);
    else console.log ('Ambos hechiceros tienen la misma orden de Merlin'); 
}

//instanciamos algunos hechizos
const expelliarmus = new hechizo('Expelliarmus', 1, false); 
const sectumsempra = new hechizo('Sectumsempra', 2, true);
const levitar = new hechizo('Wingardium Leviosa', 0, false);
const desmaius = new hechizo('Desmaius', 1, false);  
const asesinar = new hechizo('Avada Kedavra', 2, true); 
const crucio = new hechizo('Cruciatus', 2, false); 

//instanciamos algunos magos
const Dumbledore  = new mago('Albus Dumbledore', ordenDeMerlin.primeraclase, [expelliarmus, sectumsempra, levitar, desmaius], {rango: 2, escuela: 'Griffindor'}); 
const Voldemort =  new mago('Tom Riddle', ordenDeMerlin.noPosee, [asesinar, sectumsempra, desmaius, crucio], {rango: 2, escuela: 'Slytherin'});
const Newton = new mago ('Newton Scamander', ordenDeMerlin.segundaClase, [desmaius, levitar, expelliarmus, asesinar], {rango: 1, escuela: 'Hufflepuff'});
const Lockhart = new mago('Gilderoy Lockhart', ordenDeMerlin.terceraClase, [desmaius, expelliarmus, levitar], {rango: 0, escuela: 'Ravenclaw'})

console.log('Cómo va Lautaro. Vos move los magos que queres enfrentar o compara, segun sea el caso.');

//comparamos a dos magos cualesquiera. 
comparaPoderDeMagos(Dumbledore, Voldemort);
comparaPoderDeMagos(Dumbledore, Newton); 

//Enfrentamos a dos magos cualesquiera. Los numeros enteros corresponden a la posicion de un hechizo x en el array correspondiente. 
Dumbledore.enfrentamiento(Voldemort, 1, 1);
Dumbledore.enfrentamiento(Lockhart, 3, 2);


