function solution(number) {
    let numeroNuevo = [];
    let numeroAnterior =[]
    console.log(numeroNuevo)

  for (let i = 3; number <= i ; i++) {
    if (i === 0) return 0;
      if (i % 3 === 0 || i % 5 === 0) {
        numeroNuevo = numeroNuevo + number;
      } 
    return numeroNuevo;
    }
  }


console.log(solution(10));
