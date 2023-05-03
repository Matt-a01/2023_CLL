const header = document.getElementsByClassName('header');

console.log(header)

const hero = document.getElementsByClassName('contenido-hero')
console.log(hero)

const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)

const formulario = document.getElementsByClassName('formulario')
console.log(formulario)

//querySelector querySelectorAll 

//querySelector retorna maximo 1 elemento si hay multibles coincidencias 

const card = document.querySelector('.card');
console.log(card)

const info = document.querySelector('.premium .info');
console.log(info)

const secondCard = document.querySelector('.hospedaje . card:nth-child(2)')
console.log(secondCard)

const nav = document.querySelector('nav')