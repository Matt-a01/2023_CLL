// //creando arreglos

// const numeros = [50 , 80 , 12 , 64 , 75]
// console.log(numeros)

// //en Javascript cuando aparezcan corchetes son el indicativo de que es un arreglo a diferencia de los objetos ({})

// const ValoresVariados = ['hola', 98, false, null, 'si', {nombre: 'Montse', profecion:'Developer'}, [1,2,3,4,5] ]

// console.log(ValoresVariados)

// console.log(ValoresVariados[5])

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', ]


// for (let i = 0; i < meses.length; i++) {
//     console.log(meses[i])
// }

// const carrito = []

// const computadora = {
//     nombre: 'Laptop para franco',
//     precio: 2000
// }

// const teclado = {
//     marca: 'logitech',
//     precio: 50
// }

// carrito.push(computadora)
// carrito.push(teclado)

// console.log(carrito)

// //añadir al inicio del carrito

// const bocinas = {
//     marca: 'Logitech',
//     precio: 30
// }

// carrito.unshift(bocinas)
// console.log(carrito)


/*const producto1 = 'Tv grande'
producto1 = 'Tv pequeña'

console.log(producto1)

const meses1 = ['Abril', 'Mayo', 'junio', 'julio'];

meses1[0] = 'Febrero';
meses1[4] = 'Ultimo mes';
console.log(meses1) 
*/
//Añadir de forma declarativa
//añadir un elemento a un arreglo utilizando Spreed Operator o Rest Operator


// const carrito = [];

// const Producto1 ={
//     nombre: 'Celular',
//     marca: 'Marca famosa',
//     precio: 500
// }
// const Producto2 ={
//     nombre: 'Mochila',
//     marca: 'Marca no muy famosa',
//     precio: 100
// }
// const Producto3 ={
//     nombre: 'Pantalon',
//     marca: 'Marca legging',
//     precio: 300
// }

// let resultado = [...carrito, Producto1]
// resultado = [...resultado, Producto2]

// resultado = [Producto3, ...resultado,]

// //eliminar elementos de un arreglo 
// // resultado.shift(); //este metodo elimina el primer elemento del array
// // resultado.pop(); //este elemento elimina el ultomo elemento del array 
// // resultado.splice(1,0)  //el segundo parametro es que tantos elementos vamos a borrar, "0" significa que vamos a limpiar 'Nada', enntonces si no le pasamos valor en esta posicion es igual a decirle que borre todo a partir de esa posicion

// resultado.splice(1,1)

// const [primero, ...segundo] = resultado 

// console.log(primero)
// console.log(segundo)

// // console.log(resultado)


const carrito =[
    {nombre: 'monitor Grande' , precio: 500},
    {nombre: 'T.v Mediana' , precio: 800},
    {nombre: 'Tablet' , precio: 1000},
    {nombre: 'Celular' , precio: 400},
    {nombre: 'Audifonos' , precio: 600},
    {nombre: 'Bocinas' , precio: 50},
]

for (let i = 0 ; i < carrito.length ; i++){

    console.log(`articulo: ${carrito[i].nombre} precio:$ ${carrito[i].precio}`)
}

//callbackfn-una funcion que regresa una funcion 
//foreach 
carrito.forEach(function(producto) {
    console.log(`Articulo: ${producto.nombre} Precio:$ ${producto.precio}`)
})





