/*let boton = document.getElementById("btn1"); // Obtener el elemento con id btn1
let speech = new SpeechSynthesisUtterance(); // Crear una nueva instancia de SpeechSynthesisUtterance
speech.lang = "es-ES"; // Establecer el idioma a español de España
speech.text = "Hola, ¿cómo estás?"; // Establecer el texto que se va a pronunciar
speech.volume = 10; // Establecer el volumen al máximo

boton.addEventListener("click", function() { // Agregar un evento al boton
    window.speechSynthesis.speak(speech); // Pronunciar el texto
}); // Cerrar la función del evento*/

let boton = document.getElementById("btn1"); // Obtener el elemento con id btn1
let speech = new SpeechSynthesisUtterance(); // Crear una nueva instancia
speech.lang = "es-ES"; // Idioma español
//speech.text = "Hola, soy Miguel es un placer"; // Texto a pronunciar
speech.text = prompt(""); // Pedir al usuario que ingrese el texto a pronunciar   
speech.volume = 1; // Volumen máximo (de 0.0 a 1.0)

boton.addEventListener("click", function() {
    window.speechSynthesis.speak(speech); // Pronunciar el texto
});
// Cerrar la función del evento
