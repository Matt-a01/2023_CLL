//prtootypes
class Cliente{// class declaration
    constructor(nombre,  apellido, saldo){

        this.nombre = nombre;
        this.appellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `hola ${this.nombre} ${this.appellido} , tu saldo es: ${this.saldo}`
    }

    retirarSaldo(retiro){
        this.saldo -= retiro
    }

    static saludo(){
        return ` Bienvenido al cajero`
    }


}

class Banco extends Cliente{
    constructor(nombre, apellido, saldo, dir, tel, tipo){
        //hacia el constructor padre
        super(nombre, apellido, saldo)

        this.dir = dir
        this.tel = tel
        this.tipo = tipo
    }

    static saludo(mensaje){
        return `Bienbenido al cajero banco Don Billetes`
    }
}



// console.log(Cliente.saludo());
const cliente = new Cliente('Montse', 'regalo', 500)
console.log(cliente.imprimirSaldo());

const banco = new Banco ('Don Billeyes',  'X', '100000' ,'calle2', '4499887766' )
console.log(banco.imprimirSaldo());

console.log(Banco.saludo());
console.log(Cliente.saludo());

// cliente.retirarSaldo(200)
// console.log(cliente.imprimirSaldo());


// const Cliente2 =  class{//class expression
//     constructor(dir, telefono){
//     this.dir = dir;
//     this.telefono = telefono;
//     }
//     //declaramos variable


// }

// const montse =  new Cliente2 ('calle 1', '4496548978')
// console.log (montse)