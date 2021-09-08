var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var celular = document.getElementById("celular");
var mensaje = document.getElementById("mensaje");
var tips = document.querySelector(".tips")





var svgNombre = document.getElementById("NOMBRE")
var svgApellido = document.getElementById("APELLIDO")
var svgCorreo = document.getElementById("CORREO")
var svgCelular = document.getElementById("CELULAR")
let svgMensaje = document.getElementById("MENSAJE")
var svg = document.getElementById("INTERACTIONS")



//interacciones elementos
var SpanNombre = document.querySelector(".aniNombre");
var spanApellido = document.querySelector(".spanApellido");
var spanCorreo = document.querySelector(".spanCorreo");
var spanCelular = document.querySelector(".spanCelular");
var spanMensaje = document.querySelector(".spanMensaje");
var zoom = document.getElementById("zoom")


var array = [SpanNombre, spanApellido, spanCorreo, spanCelular, spanMensaje]

var arrayInputs = [nombre, apellido, correo, celular, mensaje]
var test;

var arraySvg = [svgNombre, svgApellido, svgCorreo, svgCelular, svgMensaje]
var test;


//escuchadores de evento
nombre.addEventListener("focus", interactionNombre)
apellido.addEventListener("focus", interactionApellido)
correo.addEventListener("focus", interactionCorreo)
celular.addEventListener("focus", interactionCelular)
mensaje.addEventListener("focus", interactionMensaje)

//animadores y validadores
nombre.addEventListener("keyup", validacionNombre);
apellido.addEventListener("keyup", validacionApellido);
correo.addEventListener("keyup", validacionCorreo);
celular.addEventListener("keyup", validacionCelular);
mensaje.addEventListener("keyup", validacionMensaje);

//funciones interactivas
function interactionNombre() {
    SpanNombre.style.visibility = "visible";
    validacionNombre();
    test = this.id;
}


function interactionApellido() {
    spanApellido.style.visibility = "visible";
    validacionApellido();
    test = this.id;


}


function interactionCorreo() {
    spanCorreo.style.visibility = "visible"; +
    validacionCorreo();
    test = this.id;
}

function interactionCelular() {
    spanCelular.style.visibility = "visible";
    validacionCelular();
    test = this.id;
}

function interactionMensaje() {
    spanMensaje.style.visibility = "visible";
    validacionMensaje();
    test = this.id;
}


//validaciones {
function validacionNombre() {
    var textVal = nombre.value;
    vacio(textVal);
    if (textVal.length > 3) {
        SpanNombre.dataset.animacion = "false";
        svgNombre.style.fill = "black";

    } else {
        SpanNombre.dataset.animacion = "true";
        svgNombre.style.fill = "none";
    }

}

function validacionApellido() {
    var textVal = apellido.value;
    vacio(textVal)
        //validacionTotal()
    if (textVal.length > 3) {
        spanApellido.dataset.animacion = "false";
        svgApellido.style.fill = "black";

    } else {
        spanApellido.dataset.animacion = "true"
        svgApellido.style.fill = "none";
    }
}


function validacionCorreo() {
    var textVal = correo.value;
    vacio(textVal);
    validarCorreo(textVal);
    if (errorArroba == 0 && errorPunto == 0 && textVal.length > 10) {
        spanCorreo.dataset.animacion = "false";
        svgCorreo.style.fill = "black";

    } else {
        spanCorreo.dataset.animacion = "true"
        svgCorreo.style.fill = "none";

    }
}

function validacionCelular() {
    var textVal = celular.value;
    vacio(textVal);
    if (textVal.length > 7) {
        spanCelular.dataset.animacion = "false";
        svgCelular.style.fill = "black";

    } else {
        spanCelular.dataset.animacion = "true"
        svgCelular.style.fill = "none";

    }
}

function validacionMensaje() {
    var textVal = mensaje.value;
    vacio(textVal);
    if (textVal.length > 20 && textVal.length < 60) {
        spanMensaje.dataset.animacion = "false";
        svgMensaje.style.fill = "black";

    } else {
        spanMensaje.dataset.animacion = "true"
        svgMensaje.style.fill = "none";

    }
}


//enviar boton
var boton = document.getElementById("boton")
boton.addEventListener("click", () => {
    zoom.dataset.zoom = "true"
    setTimeout(hiddenSpan, 1500)
})



//snippets
function vacio(textVal) {
    if (textVal == "") {
        tips.style.opacity = 1;
        tips.innerText = "Por favor completa los campos";
    } else {
        tips.style.opacity = 0;
    }
}


function test22() {
    function validarCorreo(textVal) {
        var caracterArroba = textVal.indexOf("@");
        var caracterPunto = textVal.indexOf(".");
        if (textVal.length == "" || " ") {
            errorVacio = "Por favor completa los campos"
        }

        if (caracterArroba == -1) {
            errorArroba = "Colocar arroba"
        } else {
            errorArroba = "";
        }

        if (caracterPunto == -1) {
            errorPunto = "Colocar punto"
        } else {
            errorPunto = "";
        }
        console.log(errorArroba + " " + errorPunto)
    }
}




function validarCorreo(textVal) {
    var caracterArroba = textVal.indexOf("@");
    var caracterPunto = textVal.indexOf(".");
    if (caracterArroba == -1) {
        errorArroba = 1;
    } else {
        errorArroba = 0;
    }

    if (caracterPunto == -1) {
        errorPunto = 1;
    } else {
        errorPunto = 0;
    }

    if (errorArroba == 0 && errorPunto == 0 && textVal.length > 10) {
        console.log("Bien");

    }
}


//ocultar spans
function hiddenSpan() {
    for (a = 0; a < array.length; a++) {
        array[a].style.visibility = "hidden";
        arrayInputs[a].value = "";
        arraySvg[a].style.fill = "none";
        zoom.dataset.zoom = "false"
    }
}