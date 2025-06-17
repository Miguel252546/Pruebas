
alert("¡Bienvenido al juego de trivia Pokémon!");
let confirmacion = confirm("¿Estás listo para comenzar?");
if (!confirmacion) {
    console.log("Juego cancelado. ¡Hasta luego!");
}else {
    preguntar();
    juego();
}

//////////////////////////////Funciones////////////////////////////////
///////////////////////Función para preguntar el nombre y apellido del usuario////////////////
function preguntar() {
    let nombre = prompt("Ingrese su nombre:");
    // Validación de nombre y apellido
    if (nombre) {
        console.log("Nombre: " + nombre);
    } else {
        console.log("Por favor, ingrese un nombre válidos.");
    }
    /////////////Preguntar si es profesor//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let pregunta = prompt("¿Usted es el profesor? (si/no)");
    // Validación de respuesta
    if (pregunta && pregunta.toLowerCase() === "si") {
        console.log("Bienvenido profesor " + nombre);
    } else if (pregunta && pregunta.toLowerCase() === "no") {
        console.log("usted no era el profesor. Pero no te preocupes, ¡podemos seguir jugando!");
    } else {
        console.log("Respuesta no válida. Por favor, responda 'si' o 'no'.");
    }
}

////////////////Función para iniciar el juego//////////////////////////////
function juego() {
    let respuesta = prompt("¿Quieres jugar a un juego? (si/no)");
    // Validación de respuesta
    if (respuesta && respuesta.toLowerCase() === "si") {
        console.log("¡Genial! Vamos a jugar.");
        trivia();
    } else if (respuesta && respuesta.toLowerCase() === "no") {
        console.log("Está bien, tal vez en otra ocasión.");
    } else {
        console.log("Respuesta no válida. Por favor, responda 'si' o 'no'.");
        return juego(); 
    }
}

/////////////////////////Función para iniciar la trivia////////////////////////
function preguntasTrivia() {
    return [
        {
            texto: "¿Cuáles son los pokémones iniciales de la región de Kanto?",
            opciones: "(a) Bulbasaur (b) Mew (c) Arceus",
            correcta: "a"
        },
        {
            texto: "¿Cuál es el Pokémon más fuerte de la región de Kanto?",
            opciones: "(a) Pikachu (b) Charizard (c) Mewtwo",
            correcta: "c"
        },
        {
            texto: "¿Cómo se llama el primer líder de gimnasio de la región de Kanto?",
            opciones: "(a) Brock (b) Misty (c) Giovanni",
            correcta: "a"
        },
        {
            texto: "¿Debilidades super efectivas que tienen los pokémon de tipo planta?",
            opciones: "(a) Fuego, Volador, Veneno, Bicho, y Hielo (b) Tierra, Roca (c) Fantasma, Hada, Hielo",
            correcta: "a"
        }
    ];
}

function trivia() {
    let respuesta = prompt("¿Quieres hacer una trivia? (si/no)");
    if (respuesta && respuesta.toLowerCase() === "si") {

        const preguntasTriviaArray = preguntasTrivia();
        console.log("¡Perfecto! Vamos a comenzar la trivia.");
        for (let i = 0; i < preguntasTriviaArray.length; i++) {
            let intento = prompt(preguntasTriviaArray[i].texto + "\n" + preguntasTriviaArray[i].opciones);
            while (intento && intento.toLowerCase() !== preguntasTriviaArray[i].correcta) {
                console.log("Incorrecto. Intentá de nuevo.");
                intento = prompt(preguntasTriviaArray[i].texto + "\n" + preguntasTriviaArray[i].opciones);
            }
            console.log("¡Correcto!");
        }

        alert("¡Terminaste la trivia! Bien hecho.");
    } else if (respuesta && respuesta.toLowerCase() === "no") {
        console.log("Está bien, tal vez en otra ocasión.");
    } else {
        console.log("Respuesta no válida. Por favor, responda 'si' o 'no'.");
        trivia(); // vuelve a intentar
    }
}
