const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const trasmision = document.querySelector('#trasmision');
const color = document.querySelector('#color');

//datos para busquda 
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    trasmision: '',
    color: ''
}

//crear year
const years = document.querySelector('option');
const max = new Date().getFullYear(); // 2023
const min = max - 10;

for (let i = max; i > min; i --){
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    document.querySelector('#year').appendChild(option) 
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)



marca.addEventListener('input', e =>{
    datosBusqueda.marca = Number( e.target.value)

    filtrarAuto()
})
year.addEventListener('input', e =>{
    datosBusqueda.year = Number( e.target.value)

    filtrarAuto()
})

minimo.addEventListener('input', e =>{
    datosBusqueda.minimo = Number(e.target.value)

    filtrarAuto()
})

maximo.addEventListener('input', e =>{
    datosBusqueda.maximo = Number(e.target.value)

    filtrarAuto()
})

puertas.addEventListener('input', e =>{
    datosBusqueda.puertas = e.target.value

    filtrarAuto()
})

trasmision.addEventListener('input', e =>{
    datosBusqueda.trasmision = e.target.value

    filtrarAuto()
})

color.addEventListener('input', e =>{
    datosBusqueda.color = e.target.value

    filtrarAuto()
})
})


//eventos
function mostrarAutos(autos){
    
    const contenedor = document.querySelector('#resultado')

    autos.forEach(auto => {
        const autoHTML = document.createElement('p')

            autoHTML.innerHTML =`
            <p> ${auto.marca} ${auto.modelo} ${auto.year} ${auto.puertas} puertas- trasmision ${auto.trasmision} - precio ${auto.precio} - color ${auto.color} </p>
            `

            contenedor.appendChild(autoHTML)

    });
}


// function limpiarHTML (){
//     const contenedor = document.querySelector('#resultado');

//     while (contenedor.firstChild){
//         contenedor.removeChild(contenedor.firstChild);
//     }
// }

function noResultado (){

    const noResultado = document.ccreateElement('div');
    
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(documet.createTextNode('no se optuvo ningun resultado'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto(){
    const resultado = auto.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTrasmision).filter(filtrarColor)

    //console.log(resultado)

    if (resultado.length){
        mostrarAutos (resultado)
    }else {
        noResultado() // div con alerta de "no se optuvo ningun resultado"
    }
}

//entrada-proceso-salida
//marca
function filtrarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}
//año
function filtrarYear(auto){
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year
    }
    return auto;
}
//minimo
function filtrarMinimo(auto){
    if (datosBusqueda.minimo) {
        return auto.minimo === datosBusqueda.minimo
    }
    return auto;
}
//maximo
function filtrarMaximo(auto){
    if (datosBusqueda.maximo) {
        return auto.maximo === datosBusqueda.maximo
    }
    return auto;
}
//puertas
function filtrarPuertas(auto){
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}
//trasmicion
function filtrarTrasmision(auto){
    if (datosBusqueda.trasmision) {
        return auto.trasmision === datosBusqueda.trasmision
    }
    return auto;
}
//color
function filtrarColor(auto){
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color
    }
    return auto;
}
