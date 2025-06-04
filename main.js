//alert(" Hello, World!");
// Sencsible a mayusculas y minusculas nombre != Nombre
//Palbras reservadas para el lengua
// var, let, const
// var nombre = "Juan";
//let nombre = "Juan"; 
//const nombre = "Juan"; // No se puede cambiar el valor de una constante
//console.log(nombre);
//comentarios // o /* */

//Datos
//perro
"perro" // String // caderna de caracteres
1 // Number // Numero
true // Boolean // Verdadero o falso

//Variables
var mascota; //No la vamos a usar

//Declarar una variable
//let nombre; // variable sin valor inicial
let nombre = "Miguel"; // Declarar una variable con let
alert (nombre); // Mostrar el valor de la variable nombre
let apellido = "Gomez"; // Declarar una variable con let 
let edad = 25; // Declarar una variable con let
let soltero = true; // Declarar una variable con let
nombre = "Miguel Zambrano"; // Cambiar el valor de la variable nombre
alert(nombre); // Mostrar el valor de la variable nombre

nombre = prompt("Ingrese su nombre:"); // Pedir al usuario que ingrese su nombre
alert("Hola " + nombre); // Mostrar un saludo al usuario con su nombre

let numero1 = 10; // Declarar una variable con let
let numero2 = 20; // Declarar otra variable con let // si se agrega"" se convierte en string,
alert("la suma de " + numero1 + " y " + numero2 + " es: " + (numero1 + numero2)); // Mostrar la suma de las dos variables

let num1 = prompt("Ingrese el primer numero:"); // Pedir al usuario que ingrese el primer numero
let num2 = prompt("Ingrese el segundo numero:"); // Pedir al usuario que ingrese el segundo numero
//alert("la sume de" + num1 + "y" + num2 + " es igual a:" + (num1 + num2)); // Mostrar la suma de los dos numeros ingresados por el usuario
//alert(" la sume es " + (Number(num1) + Number(num2))); // Mostrar la suma de los dos numeros ingresados por el usuario, convirtiendo los valores a numeros
console.log(" la sume es " + (Number(num1) + Number(num2)))