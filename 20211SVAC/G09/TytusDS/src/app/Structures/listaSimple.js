class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Lista {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    add(dato) {
        let nuevo = new Nodo(dato)
        if (this.primero == null) {
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.size++;
        } else {
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            this.size++;
        }

    }

    print() {
        var valores = []
        let aux = this.primero;
        while (aux != null) {
            valores.push(aux.dato);
            console.log("Dato:", aux.dato);
            aux = aux.siguiente;
        }

        return valores;
    }

}
function f1(){
    document.write("Algo por favor funciona we");
}

module.exports = Lista;

