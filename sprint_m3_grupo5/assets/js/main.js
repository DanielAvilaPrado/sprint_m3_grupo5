var respuestas = document.getElementById("respuestas");
var respuestas2 = document.getElementById("respuestas2");
var respuestas3 = document.getElementById("respuestas3");

function informe1 (e) {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let sueldoActual = document.getElementById("sueldoActual").value;
    let sueldoSemAnt = document.getElementById("sueldoSemAnt").value;
    let cargaFam = document.getElementById("cargaFamiliar").value;
    let cantidadCargas = document.getElementById("cantidadCargas").value;
    
    if (cargaFam == "true") {
        if (sueldoSemAnt <= 429899) {
            var tramo = "Tramo 1A";
            let tramo1A = 16828;
            let sueldoTotal1 = tramo1A * cantidadCargas + parseInt(sueldoActual);
            let respuestaTA = `Al trabajador ${nombre} ${apellido}, quien recibe actualmente un sueldo de ${sueldoActual} pesos, le corresponde una asignación familiar del ${tramo} equivalente a ${tramo1A} pesos por cada una de sus ${cantidadCargas} cargas familiares declararas y autorizadas`;
            respuestas.innerHTML = respuestaTA;
            respuestas2.innerHTML = `El trabajador recibirá un sueldo final, es decir, sueldo actual más total de asignación familiar, equivalente a ${sueldoTotal1} pesos`
        } else if (sueldoSemAnt > 429899 && sueldoSemAnt <= 627913) {
            var tramo = "Tramo 2B";
            let tramo2B = 10327;
            let respuestaTB = `Al trabajador ${nombre} ${apellido}, quien recibe actualmente un sueldo de ${sueldoActual} pesos, le corresponde una asignación familiar del ${tramo} equivalente a ${tramo2B} pesos por cada una de sus ${cantidadCargas} cargas familiares declararas y autorizadas`;
            respuestas.innerHTML = respuestaTB;
        } else if (sueldoSemAnt > 627913 && sueldoSemAnt <= 979330) {
            var tramo = "Tramo 3C";
            let tramo3C = 3264;
            let respuestaTC = `Al trabajador ${nombre} ${apellido}, quien recibe actualmente un sueldo de ${sueldoActual} pesos, le corresponde una asignación familiar del ${tramo} equivalente a ${tramo3C} pesos por cada una de sus ${cantidadCargas} cargas familiares declararas y autorizadas`;
            respuestas.innerHTML = respuestaTC;
        } else if (sueldoSemAnt > 979330) {
            var tramo = "Tramo 4D";
            let tramo4D = 0;
            let respuestaTD = `Al trabajador ${nombre} ${apellido}, quien recibe actualmente un sueldo de ${sueldoActual} pesos, no le corresponde recibir asignación familiar por encontrarse en el ${tramo} equivalente a ${tramo4D} pesos`;
            respuestas.innerHTML = respuestaTD;
        }
    } else {
        respuestas.innerHTML = `El trabajador ${nombre} ${apellido} no declara cargas familiares`;
    }
}
const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", informe1);