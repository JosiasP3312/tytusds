let arbolb=require('./Abinario');

let bst = new arbolb();
let l={
  hola:"xD",
  mañana:"jijo"
}
let m={
  hola:"xD",
    mañana:"jijo"
}
console.log(JSON.stringify(l)===JSON.stringify(m));

bst.append(10);
let dot=bst.Dot();
console.log(dot);
bst.append(5);
bst.append(15);
bst.append(14);
bst.append(16);
bst.append(15)
bst.append(1);
bst.append(6);
bst.preorden();


//ELIMINAR UN NODO HOJA SI HIJOS FUNCIONA
