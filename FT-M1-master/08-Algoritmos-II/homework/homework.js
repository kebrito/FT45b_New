"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array <= 1) return array;
  let pivot = array[Math.floor(array.length / 2)]; //para seleccionar el pivote tirandolo al piso en el medio del array
  let arrayMenor = []; //se crean las listas izquierda para los elementos menos del pivot
  let arrayMayor = []; //se crean las listas derecha para los elementos mayores del pivot
  let pivotIgualado = []; //se crean las listas para elementos iguales
  // Declaro el bucle for
  for (let i = 0; i < array.length; i++) {
    // Comparo el elemento con el pivot y si es menor lo pongo en la izquierda
    if (array[i] < pivot) {
      arrayMenor.push(array[i]);
      //console.log(arrayMayor);
      // Comparo el elemento con el pivot y si es mayor lo pongo en la derecha
    } else if (array[i] > pivot) {
      arrayMayor.push(array[i]);
      //console.log(arrayMenor);
      //si ningunas de las opciones se cumplen entonces guardo los valores iguales en esta variable.
    } else {
      pivotIgualado.push(array[i]);
    }
  }
  //Aqui llamo la recursion de arraymenor y la concateno (unificar) con el valor que es el pivot igualado lo separo por coma y le agrego el otro valor de la derecha el mayor
  return quickSort(arrayMenor).concat(pivotIgualado, quickSort(arrayMayor));
}

10, 10, 16, 12;
console.log(quickSort([5, 1, 4, 2, 8]));
console.log(quickSort([10, 10, 16, 12]));
console.log(quickSort([10, -2, -7, 4]));

function mergeSort(array) {
  //Aqui declaramos las variables para poder utilzarla luego
  let middle = array[Math.floor(array.length / 2)];
  let left = array.slice(0, middle);

  //   if (array.length <= 1) {
  //     return array;
  //   }
  //   const middle = Math.floor(array.length / 2);
  //   const left = array.slice(0, middle);
  //   const right = array.slice(middle);
  //   function merge(left, right) {
  //     if (!left.length) {
  //       return right;
  //     }
  //     if (!right.length) {
  //       return left;
  //     }

  //     if (left[0] < right[0]) {
  //       return [left[0]].concat(merge(left.slice(1), right));
  //     } else {
  //       return [right[0]].concat(merge(left, right.slice(1)));
  //     }
  //   }
  //   return merge(mergeSort(left), mergeSort(right));
}
// Implementar el método conocido como mergeSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
//okey probemos ahora

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
