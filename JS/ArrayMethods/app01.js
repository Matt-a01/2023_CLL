const carrito =[
    {nombre: 'monitor Grande' , precio: 500},
    {nombre: 'T.v Mediana' , precio: 800},
    {nombre: 'Tablet' , precio: 1000},
    {nombre: 'Celular' , precio: 400},
    {nombre: 'Audifonos' , precio: 600},
    {nombre: 'Bocinas' , precio: 50},
]

const meses = ['enero', 'febrero', 'marzo', 'april', 'mayo', 'junio']

// meses.forEach(mes =>{
//     if(mes === 'febrero'){
//         console.log("febrero si existe")
//     }
// }

const resultado = meses.includes('marzo');
// console.log(resultado)

const existencia = carrito.some(producto => producto.nombre === 'celular')
// console.log(existencia)

const indice = meses.findIndex (mes => mes === 'diciembre')
// console.log(indice)

let resultado1 = carrito.filter (producto => producto.precio > 200)

let resultado2 = carrito.filter (producto => producto.nombre > 'Teclado')

let resultado3 = carrito.filter (producto => producto.nombre > 'TV 50"')