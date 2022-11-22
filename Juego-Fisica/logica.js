let base_preguntas = leerTexto("base-preguntas.json");
let interprete = JSON.parse(base_preguntas);
let pregunta;
let posibles_respuestas
escogerPreguntaAleatoria();
function escogerPreguntaAleatoria() {
    escogerPregunta(Math.floor(Math.random() * interprete.length))
    desordenarRespuestas();
}
function escogerPregunta(n) {
    pregunta = interprete[n];
    seleccionar_id("categoria").innerHTML = pregunta.categoria;
    seleccionar_id("pregunta").innerHTML = pregunta.pregunta;
    seleccionar_id("imagen"). objectFit = pregunta.objectFit;
    seleccionar_id("imagen").setAttribute("src", pregunta.imagen);
    seleccionar_id("btn1").innerHTML = pregunta.respuesta;
    seleccionar_id("btn2").innerHTML = pregunta.incorrecta1;
    seleccionar_id("btn3").innerHTML = pregunta.incorrecta2;
    seleccionar_id("btn4").innerHTML = pregunta.incorrecta3;
}
let btn_correcto = [
    seleccionar_id("btn1"),
    seleccionar_id("btn2"),
    seleccionar_id("btn3"),
    seleccionar_id("btn4")
]
let btns = [
    seleccionar_id("btn1"),
    seleccionar_id("btn2"),
    seleccionar_id("btn3"),
    seleccionar_id("btn4")
]
function desordenarRespuestas() {
    posibles_respuestas = [
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3
    ]
    posibles_respuestas.sort(() =>Math.random() - 0.5)
    seleccionar_id("btn1").innerHTML = posibles_respuestas[0];
    seleccionar_id("btn2").innerHTML = posibles_respuestas[1];
    seleccionar_id("btn3").innerHTML = posibles_respuestas[2];
    seleccionar_id("btn4").innerHTML = posibles_respuestas[3];
}

function oprimir_btn(i) {
    console.log(posibles_respuestas[i]);
    if(posibles_respuestas[i] == pregunta.respuesta){
        btn_correcto[i].style.background = "#0807";
    }else{
        btn_correcto[i].style.background = "#a00";
    }
    setTimeout(() => {
        reiniciar_botones();
    }, 3000);

}
function reiniciar_botones() {
    for (const btn of btn_correcto ) {
        btn.style.background = "";
    }
    escogerPreguntaAleatoria();
}
function seleccionar_id(id) {
    return document.getElementById(id)
}
// es para tener el estilo
function estilo(id){
    return seleccionar_id(id).estilo
}
//es para leer texto en rutas locales
function leerTexto(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",ruta_local,false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}