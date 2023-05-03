const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

let modificar = false

//formulario para las nuevas citas
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('sumbit', nuevaCita)

//objeto para informacion
const citaObjet ={
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

function datosCita(e) {
    citaObjet[e.target.name] = e.target.value
}


//class
class Cita{
    constructor(){
        this.citas =[]
    }
    //agregarcita, eliminarcita, editarcita
    agregarCita(cita){//entrda-proceso-salida
            this.citas = [... this.citas , cita]
    }

    editarCita(citaActualizada) {
        //cita a celecionar
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)

        if (Cita.id === citaActualizada.id){

        }else{
            return Cita
        }


        //que podemos editar? dia, mes, hora, 

        //boton de confirmacion y cancelacion 
    }

}

class UI{
    imprimirAlerta(){
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('tex-center', 'alert', 'd-block', 'col-12')

        //
        if (tipo === 'error'){
            divAlerta.classList.add('alert-danger')
        }else {
            divAlerta.classList.add('alert-success')
        }

        //agregando elementos al DOM 
        document.querySelector('#contenido').insertBefore(divAlerta, document.querySelector('.agregar-cita'))
        
        setTimeout(() =>{
            divAlerta .remove()
        } , 3000)
    }

    imprimirAlerta({citas}){

        citas.forEach (cita => {
            const {mascota, propietario, telefono, fecha, sintomas, id} = cita
            const divCita = document.createElement('div')
            divCita.classList.add('cita')
            
            divCita.classList.add('cita')
            divCita.dataset.id = id

            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrafo.innerHTML  = `${mascota}`


        })
    }
}

const ui = new IU(); //
const admonCitas = new Cita();


function nuevaCita(e) {
    e.preventDefault()
    
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObjet //objet destructuring

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
    ui.imprimirAlerta('todos los campos son obligatorios')

    if (modificar) {
        //estamos editando cita
        admonCitas.editarCita('Guardado correctamente');

        formulario.querySelector('botton[type="submit"]').textContent = 'Crear Cita'
        modificar = false
    }

    }else{
        //nuevo Registro

        //generador de ID
        citaObjet.id = Date.now //123456789
            //add nueva cita 
            admonCitas.agregarCita({...citaObjet})

            ui.imprimirAlerta('Cita agregada correctamente')

        

    }
    
}