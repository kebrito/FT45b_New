"use strict";
<<<<<<< HEAD
=======
// Recursion Infinita
function recursionInfinita(numero) {
  console.log(numero);
  if (numero === 1) return 1;
  return recursionInfinita(numero + 1);
}

// Llamada a la función
// recursionInfinita(8);
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
<<<<<<< HEAD

  // 
  if (n === 1) return 1;
 
  var nuevonumero = n - 1; // 
  console.log(nuevonumero)
  var recursion = nFactorial(nuevonumero);
  var resultado = n * recursion;

  return resultado;

  }


function nFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}
=======
  // Por definicion matematica:
  // 0! = 1
  // 4 3 2 1
  // n -> El numero al cual le quiero calcular el factorial
  if (n === 1 || n === 0) return 1;
  var factorial = n * nFactorial(n - 1);
  return factorial;
}
console.log(nFactorial(4));
//4! = 4

// 4! = 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3!
// n! = n * (n-1) * (n-2) *...* 1
// (n-1)! = (n-1) * (n-2) * ... * 1
// n! = n * (n-1)!

function nFibonacci(n, cache = {}) {
  // 3 2
  // n es una posicion
  // como usar n como posicion para calcular el valor de la secuencia
  // caso de corte - caso base
  // n0 = 0
  // n1 = 1
  if (n === 0 || n === 1) return n;
  // si quiero calcular la secuencia de la posicion 2
  // sumar nFibo de la posicion 1 + nF en la posicion 0
  //
  if (!cache.hasOwnProperty(n)) {
    var fibo1 = nFibonacci(n - 1, cache);
    var fibo2 = nFibonacci(n - 2, cache);
    var fibo = fibo1 + fibo2;
    cache[n] = fibo;
  }
  return cache[n];
}
nFibonacci(10); // 1
// n1 = 0
// n2 = 1
// n3 = n1 + n2 -> 1
// n4 = n2 + n3 -> 1 + 1 -> 2
// n5 => n3 + n4 ->  3
// n -> posicion

// 0 1 1 2
//       ^
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

<<<<<<< HEAD
function Queue() {
  this.arr = [];
}
Queue.prototype.enqueue = function (elem) {
  return this.arr.push(elem);
};
Queue.prototype.dequeue = function (elem) {
  return this.arr.shift();
};
Queue.prototype.size = function () {
  return this.arr.length;
};
=======
/* function Queue() {
  this.cola = []
}

Queue.prototype.enqueue = function (elem) {
  this.cola.push(elem)
}

Queue.prototype.dequeue = function () {
  return this.cola.shift()
}

Queue.prototype.size = function () {
  return this.cola.length
} */

const obj = new Object();
console.log(obj);

// notacion de clase

class Queue {
  constructor() {
    this.cola = [];
  }
  enqueue(el) {
    this.cola.push(el);
  }
  dequeue() {
    return this.cola.shift();
  }
  size() {
    return this.cola.length;
  }
}
const queue = new Queue();
console.log(queue.size());
console.log(queue.enqueue("Juan"));
console.log(queue.enqueue("Pedro"));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
