// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "ERES PERFECTA", time: 8 },
  { text: "TE EXTRAÑO", time: 10 },
  { text: "SIMPRE PIENSO EN TI", time: 12 },
  { text: "CUENTAS CONMIGO  EN TODO MOMENTO", time: 14 },
  { text: "QUIERO TODO DE TI", time: 16 },
  { text: "TIENES TODO DE MI", time: 18 },
  { text: "GRACIAS POR TRATARME BONITO", time: 20 },
  { text: "CUIDA MI CORAZÓN QUE ES TODO TUYO", time: 23 },
  { text: "QUIERO HACERTE FELIZ", time: 26 },
  { text: "QUIERO DARTE TODO MI AMOR", time: 29 },
  { text: "CONTIGO SIEMPRE REINA", time: 32 },
  { text: "SIEMPRE SERAS LA UNICA EN MI CORAZÓN", time: 35 },
  { text: "ERES IMPORTANTE PARA MI", time: 38 },
  { text: "COMO TU NINGUNA", time: 40 },
  { text: "QUISIERA QUE SIEMPRE ESTES CONMIGO", time: 42 },
  { text: "ME DARIAS TU CORAZÓN?", time: 45 },
  { text: "QUIERO DARTE BESITOS Y ABRAZOS", time: 48 },
  { text: "YA SOÑE VARIAS VECES CONTIGO", time: 51 },
  { text: "PUEDO VOLVER A ESCUCHAR TU VOZ?", time: 54 },
  { text: "ERES PRECIOSA", time: 56 },
  { text: "ALEGRAS MIS DIAS", time: 58 },
  { text: "TODO ES MAS LINDO CONTIGO", time: 60 },
  { text: "ME ENAMORAS", time: 63 },
  { text: "ERES MARAVILLOSA", time: 65 },
  { text: "ME ENCANTAS", time: 67 },
  { text: "TE QUIERO", time: 69 },
  { text: "TE AMO.", time: 71 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);