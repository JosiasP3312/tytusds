import { Component, OnInit } from '@angular/core';
import { ListaDoble } from './ts/lista-doble';
declare var require: any;
let vis=require('../../../../vis-4.21.0/dist/vis');

@Component({
  selector: 'app-lista-doble',
  templateUrl: './lista-doble.component.html',
  styleUrls: ['./lista-doble.component.css']
})
export class ListaDobleComponent implements OnInit {

  lista: ListaDoble;

  valorAgregar = '';
  valorEliminar = '';
  nodoActualizar = '';
  valorActualizar = '';
  valorBuscar = '';

  constructor() { 
    this.lista = new ListaDoble();
  }

  ngOnInit(): void {}

  agregar(): void {
    if (this.valorAgregar.length > 0) {
      this.lista.agregarFinal(this.valorAgregar);
      this.lista.recorrer();
      this.graficar();
      this.valorAgregar = '';
    }
  }

  eliminar(): void {
    if (this.valorEliminar.toString().length > 0){
      this.lista.eliminar(+this.valorEliminar);
      console.log(this.lista);
      this.graficar();
      this.valorEliminar = '';
    }
  }

  actualizar(): void {
    if (this.nodoActualizar.length === 0 || this.valorActualizar.length === 0) {
      console.log('no se puede');
      return;
    }
    this.lista.actualizar(+this.nodoActualizar, this.valorActualizar);
    this.graficar();
    this.nodoActualizar = '';
    this.valorActualizar = '';
  }

  buscar(): void {
    console.log('buscar');
  }

  //OPCIONES PARA GRAFICAR------------------------
  graficar(): void {
    //Retorno de la lista con los objetos de nodos y edges
    const nodes = this.lista.getNodos();
    const edges = this.lista.getEdges();
    //se escoge el div a utilizar como contenedor
    let contenedor = document.getElementById("contenedor");
    const datos = {nodes:nodes,edges:edges};
    //OPCIONES PARA LOS NODOS----------------------------------------------------------
    let opciones={
      edges:{
        arrows:{
          to:{
            enabled:true
          }
        },
        color:{
          color:"red"
        }
      },
      nodes:{
        color:{
          border:"white",background:"red"
        }
      }
    };
    //------------------------------------------------------------------------
    let grafo= new vis.Network(contenedor,datos,opciones);
  }


}
