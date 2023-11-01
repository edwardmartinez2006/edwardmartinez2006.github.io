var respuestasCorrectas = 0;

function respuesta(pregunta, seleccion) {
    var preguntaActual = "Pregunta_" + pregunta;
    var valorSeleccionado = seleccion.value;

    if (valorSeleccionado === "Correcta_" + pregunta) {
        respuestasCorrectas++;
    }
}
function corregir() {


    document.getElementById('resultado').textContent = respuestasCorrectas;
}