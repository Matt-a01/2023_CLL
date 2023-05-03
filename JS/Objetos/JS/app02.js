//taza

const taza={
    capacidad: 500,
    diseño: '',
    peso: '20',
    material: 'porcelana',
    color:'champage',
    diseño: 'Taza ingienero en software',
    precio: 200
}

const foco={
    color:'blanco',
    forma:'Circular',
    peso:'10g',
    potencia: 220 ,
    tipo:'Led',
    informacion:{
        marca: 'LG',
        conectividad: 'Bluetooth'
    },
    array: [1,2,3,4,]
}

console.log(foco.informacion.conectividad)


const nombre = taza.diseño ;

// console.log(nombre)

// Object destructuring

const {tipo} = foco;
const {color} = foco;

// console.log(tipo)
// console.log(color)

const {diseño, material, precio} = taza 

console.log(diseño)
console.log(material)
console.log(precio)