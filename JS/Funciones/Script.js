
// sumar();
// function sumar(){
//     //serie de instrucciones que realizara cierta tarea
//     console.log(2 + 2)
// }

// //hosting = creacion y ejecucion 
// const sumar2 = function(){
//     console.log(3 + 3)
// }

// funcionNueva();
// const NuevaFuncion = function(){
//     //codigo...

//     console.log(5 + 5)
// }

// const funcionNueva = function(){
//     //codigo que optimiza varios procecos
// }

// prompt ('¿Cual es tu edad?')
// alert('Hubo un error')
// parseInter

// const numero1 = 20;
// const numero2 = '20';

// console.log(parseInter(numero2)); //esto es una funcion
// console.log(numero1.toString()); //esto es un metodo

// function saludo(nombre, apellido){
//     console.log(`hola ${nombre} ${apellido}`)
// }

// saludo('Sebastian Matthew', 'Sandoval Castillo');
// saludo();

// function saludar(nombre = 'Sebastian Matthew', apellido= ''){
//     console.log(`hola ${nombre} ${apellido}`)
// }
// saludar('Carlos', 'Gonzales')

// inicioApp()

// function inicioApp(){
//     console.log('iniciando App...')
//     bienvenida();
// }

// function bienvenida(){
//     console.log('Bienvenido a la tienda en linea mas grande del mundo')
//     usuarioAutenticado('Sebastian') 
// }


// function usuarioAutenticado(usuario) {
//     console.log('autenticando usuario...')
//     console.log('Usuario autenticado con exito')

    
// }

// function sumar(a, b){
//     return a + b
// }
// const resultado = sumar(23, 3)
// const resultado1 = sumar(56, 38)

// console.log(resultado)
// console.log(resultado1)

//ejemplo de carrito


//realiza el algoritmo para determinar el total a pagar en la compra

// let total = 560;

// function agregarCarrito(precio){
//     return total += precio;
// }

// function calcularImpuesto(total){
//     return 1.16 * total
// }

// total = agregarCarrito(300)
// total = agregarCarrito(500)
// total = agregarCarrito(400)

//metodo de propiedades...

const reproductor ={
    repoducir: function(id) {
        console.log(`Reproduciendo cancion ID ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlist ${nombre}`);
    }
}

reproductor.repoducir('Bzrap50shakira')
reproductor.pausar   ()
reproductor.crearPlaylist()
reproductor.reproducirPlaylist()


//arrow function 
//const aprendiendoFuntion = function()...

//funtion nombeFuntion()

const aprendiendoFunciones = () => {
    //codigo 
    console.log('aprendiendo funciones');

}

const aprendiendoFunciones1 = () => console.log