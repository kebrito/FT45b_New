"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // let factores = [1];
  // if (num === 1) return factores;
  // if (num === 2) return [1, 2];
  // if (num === 3) return [1, 2, 3];

  // for (let i = 2; i < num; i++) {
  //   let residuo = num % i; // 180 %2-->0
  //   let cociente = num / i; // 180 %2-->0
  //   if (residuo === 0) {
  //     factores.push(i);
  //     num = cociente;
  //     i = i - 1;
  //   }

  //   console.log(factores);
  // }
  // return factores;

  let array = [1];
  let divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      array.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return array;
}
console.log();
console.log(factorear(180));

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Intercambiar elementos
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return array;
}
console.log(bubbleSort([[5, 1, 4, 2, 8]]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //!Ejemplo
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    console.log(array[i]);
    let j = i - 1;
    console.log(j);
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([5, 1, 4, 2, 8]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let n = array.length; // Obtiene la longitud del array para determinar el límite de las iteraciones.

  // Recorre cada elemento del array, excepto el último.
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Asume que el elemento actual es el mínimo.
    // Recorre los elementos siguientes al actual.
    for (let j = i + 1; j < n; j++) {
      // Si encuentra un elemento menor,
      if (array[j] < array[minIndex]) {
        minIndex = j; // actualiza el índice del mínimo.
      }
    }
    // Si el mínimo no es el elemento actual,
    if (minIndex != i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // intercambia los elementos.
    }
  }

  return array; // Devuelve el array ordenado.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
