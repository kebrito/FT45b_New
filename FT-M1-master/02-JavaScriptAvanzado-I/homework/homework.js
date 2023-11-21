<<<<<<< HEAD
//Even Loop

function printing() {
  console.log(1); //Primero en imprimir
=======
//! Event Loop
/* function printing() {
  console.log(1);
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
<<<<<<< HEAD
    console.log(3); //2do imprimir
=======
    console.log(3);
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
  }, 0);
  console.log(4);
}

<<<<<<< HEAD
printing();

// Orden de impresion 1,4,3,2

//Scope & Hoisting

// Todas las declaraciones con VAR e crean con undefined aunque sean funciones eje. var c= function.

//cuando una funcion se ejecuta se crea un nuevo contexto para C en este caso.
// el lexical enviroment se define las variables y todas las funciones y se definen como undefined

x = 1;
=======
printing(); */
// 1 4 3 2

//! SCOPE & HOISTING
//1.
/* x = 1;
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
<<<<<<< HEAD
console.log(x);

//El Resultado del orden de la ejecucion  10-8-8-9-10-1

// 2 Do Ejercicio:
// Global context
//Fase de creacion ==> Lexicval enviroment ==> {food:fn, bar:undef, baz: undef}
//FE+> foo()

console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;

//3 Ser ejerciocio:"

=======
console.log(x); */

//2.
// G.C ->
// F.C -> L.E -> {foo: fn, bar: 1, baz: 2}
// F.E -> foo()

/* console.log(bar); // undefined
baz = 2;
console.log(baz); // 2
foo();
function foo() {
  console.log("Hola!"); // Hola
}
var bar = 1; */

//3.
// G.C ->
// F.C -> L.E -> {instructor: Franco}
// F.E -> 
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
<<<<<<< HEAD
console.log(instructor);

//4 to Ejercicio

//funcion de autoejkecutable
// GC-->
//FC-->L.E--> {Instructor:undef}
//F.E

var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);

//ejercicio #5  Let const Var
// let y const tienen scope de bloque

=======
console.log(instructor); // Franco

//4. Se usa una IIFE -> Funcion Autoejecutable
// G.C ->
// F.C -> L.E -> { instructor: Tony}
// F.E -> fn() -> cl

var instructor = "Tony";
console.log(instructor); // Tony
(function () {
    if (true) {
        var instructor = "Franco";
    console.log(instructor); // Franco
  }
})();
console.log(instructor); // Tony

// 5. LET CONST VAR
// let y const tienen scope de bloque
// G.C ->
// F.C -> L.E -> {instructor: The Flash, pm: Franco} {pm: Reverse Flash}
// F.E -> 
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
<<<<<<< HEAD
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);

//Hoisting

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
=======
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco

//! Coercion de datos
6 / "3" // -> 6 / 3 -> 2
"2" * "3" // 2 * "3" -> 2 * 3 -> 6
4 + 5 + "px" // -> 9 + "px" -> "9" + "px" -> "9px"
"$" + 4 + 5 // "$" + "4" -> "$4" + 5 -> "$4" + "5" -> "$45"
"4" - 2 // 4 - 2 -> 2
"4px" - 2 // "4px" - "2" -> NaN -> Not a Number
7 / 0 // Infinity
{ } [0] // {} -> object, [0] -> accede a la propiedad 0 de ese objeto, que no existe, por ende arroja undefined
parseInt("09") // 9
// El unico numero que toma el valor de false -> 0
5 && 2 // true && true -> 2
2 && 5 // true && true -> 5
// || Conque uno sea verdadero, ya se resuelve a verdadero
5 || 0 // 5
0 || 5 // 5
[3] + [3] - [10] // [3] + [3] -> "3" + [3] -> "3" + "3" -> "33" , "33" - [10] -> "33" - "10" -> 33 - "10" -> 33 - 10 -> 23
3>2>1 // 3 > 2 -> true > 1 -> 1 > 1 -> false

// => []==![] -> !![] -> true, ![] -> !true -> false

// => []==false // Type conversion by the statement itself

// => []==0 // To number of right operand

// => ""==0 // To Primitive call for Array which will in this case convert to empty string

// => 0==0 // To number call of "" which is 0

// => true

//! Hoisting
// 1. 
// G.C ->
// F.C -> L.E -> {test: fn}
// F.E -> test() -> C.L ->
//                  F.C -> L.E -> {a : und, foo: fn}
//                  F.E -> 
function test() {
  console.log(a); // und
  console.log(foo()); // 2
  
  var a = 1;
  function foo () {
    return 2;
  }
}
test();

// 2.
// G.C ->
// F.C -> L.E -> {snack = und, getFood: fn}
// F.E -> getFood() 
var snack = "Meow Mix";
function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack; // undef
}

getFood(false);

//! THIS
console.log(this)
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname;
console.log(test());
>>>>>>> d717af2f832583d21a7b6c39e38e6c7251a205b5
