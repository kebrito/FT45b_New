//Even Loop

function printing() {
  console.log(1);  //Primero en imprimir 
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);  //2do imprimir
  }, 0);
  console.log(4); 
}

printing();

// Orden de impresion 1,4,3,2


//Scope & Hoisting

// Todas las declaraciones con VAR e crean con undefined aunque sean funciones eje. var c= function.

//cuando una funcion se ejecuta se crea un nuevo contexto para C en este caso.
// el lexical enviroment se define las variables y todas las funciones y se definen como undefined

x = 1;
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

var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
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

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
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