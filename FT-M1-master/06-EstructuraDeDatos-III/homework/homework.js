"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;

  //Otra forma de calcular el tamano del arbol
  // this._length= 0;
}

BinarySearchTree.prototype.insert = function (elem) {
  let subTree = new BinarySearchTree(elem);
  //Verifico que esta la nueva instancia
  console.log(subTree);
  // verifico que el valor que me estan digitando sea menor al valor que tiene la clase si es asi lo mando a la izquierda de caso contrario
  if (elem < this.value) {
    // Si no hay nada a la izquierda entonces agrego el subtree
    if (!this.left) {
      this.left = subTree;
    } else {
      //this.left esta ocupado
      //aplico recursion (se aplica invocando al metodo y pasandole el el dato dato (elem))
      this.left.insert(elem);
    }
  }
};
let myTrtee = new BinarySearchTree(20);
console.log(myTrtee);
myTrtee.insert(15);
myTrtee.insert(17);
myTrtee.insert(25);
myTrtee.insert(25);
myTrtee.insert(18);

BinarySearchTree.prototype.contains = function (elem) {
  //caso ideal caso base caso de corte
  if (elem === this.value) return true;
  if (elem < this.value) {
    //Valido que haya alguien ahi
    if (!this.left) return false;
    // Y si hay algo lo comparo
    else return this.left.contains(elem);
  } else {
    // Ya se que los casos que entran en este caso son estrictamente mayores
    if (!this.right) return false;
    else return this.right.contains(elem);
  }
};

BinarySearchTree.prototype.size = function () {
  if (!this.value) return 0;
  if (!this.left && !this.right) return 1;
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && !this.right) return 1 + this.left.size();
  if (this.left && this.right) return 1 + this.right.size() + this.left.size();

  // !Forma diferente de hacer esta funcion
  //   let count = 1;
  //   console.log(count);
  //   if (this.left) count += this.left.size();
  //   if (this.right) count += this.right.size();
  //   return count;

  //Otra forma de calcular el tamano del arbol
  // return this._length;
};



function consologuear(elem) {
   console.log(elem);

   // ! Pre-order --->  nodo-izquierda-derecha
   //? In-order-----> izquierda---nodo---derecha
   //*post-order----> izquierda---dercha---nodo
   
   BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
switch (order) {
  case "pre-order":
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    break;
  case "post-order":
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
    break;
  case "in-order":
    if (this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
  default:
    break;
}
   }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
