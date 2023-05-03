const prompt = require('prompt-sync')({sigint: true});

let descuento = 0
let descuentoFinal = 0

const articulos = Number(prompt("ingrese el numero de articulos a pagar")) 
    
    for (let i = 1; i <= articulos; i++) {
        const precio = Number(prompt(`ingrese el precio del articulo ${i}`))

        if (precio >= 200) {
            descuento = 0.15 * precio ;
            descuentoFinal = precio - descuento;
            
            console.log(`el precio del articulo es de ${precio}, el descuento del articulo es : ${descuento}`)
        }
        else if (precio > 100 ){
            descuento = 0.12 * precio
            descuentoFinal = precio - descuento

            console.log(`el precio del articulo es de ${precio}, el descuento del articulo es : ${descuento}`)
        }
        else{
            descuento = 0.10 * precio
            descuentoFinal = precio - descuento

            console.log(`el precio del articulo es de ${precio}, el descuento del articulo es : ${descuento}`)
        }
    }

    totalPago = descuentoFinal

    console.log(`El pago total por los articulos adquiridos es de: ${totalPago}`)