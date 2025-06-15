//btn1
let boton = document.getElementById("btn1");
let hablando = false;

let speech = new SpeechSynthesisUtterance();
speech.lang = "es-ES";  
speech.text = "Bienvenido a esta primera entrega del curso de JavaScript. Espero mucho que le guste";
speech.volume = 1;
boton.addEventListener("click", function() {
    if (hablando) {
        window.speechSynthesis.speak(speech);
        hablando = false;
    } else {
        window.speechSynthesis.cancel();
        hablando = true;
    }
});
