const cv = {
    nombre: 'sebastian Matthew',
    profesion: 'estudiante (tecnico, desarollo web)'
}

//localStorage soporta unicamente string
localStorage.setItem('nombre','Esteban')

const CV = JSON.stringify(cv);
localStorage.setItem('CV', cv);

const coder = ['lizeth', 'sofia', 'sebastian', 'Jenni', 'Emiliano','Franco']

localStorage.setItem('coders', JSON.stringify(coder));

const nombre = localStorage.getItem('nombre');
console.log(nombre);

const CV1 = localStorage.getItem('CV')
console.log(JSON.parse(CV1));


localStorage.removeItem('edad');


//alta baja constultas update (CRUD)
const coders = JSON.parse(localStorage.getItem('coders'));
console.log(coders);

coders.push('Caleb')
console.log(coders);

localStorage.removeItem('coders', JSON.stringify(coders));
