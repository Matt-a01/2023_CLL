function obtenerPres() {
    Presupuesto = prompt("¿Cual es tu presupuesto?");

    if (Presupuesto === null || isNaN(Presupuesto) || Presupuesto <= 0) {

    obtenerPres();

    } else {

        document.querySelector("#total").textContent = Presupuesto;
        restante = Presupuesto;
        document.querySelector("#restante").textContent = restante;
    }
}

class Presupuesto {
    constructor() {
        this.gastos = [];
        this.total = 0;
    }

    agregarGasto(nombre, cantidad) {
        const gasto = {
        id: Date.now(),
        nombre,
        cantidad: parseInt(cantidad),
        };
        this.gastos = [...this.gastos, gasto];
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    }

    actualizarCantidad() {
        const compras = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        const diferencia = this.total - compras;
        return diferencia;
    }
}





