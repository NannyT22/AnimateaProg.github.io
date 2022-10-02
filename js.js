 const edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad >= 18) {
    alert("Eres mayor de edad, puede ingresar");
} else {
    alert("Eres menor de edad, puede entrar bajo su responsabilidad");
}

function otraPagina() {
    var confirmar = confirm('Estas Seguro deseas Salir')
    if (confirmar) {
        alert = ('Estas Seguro deseas Salir')
        location.href = ('https://www.google.com')
    }
    else {
        "Sigue con nosotros"
    }
}



function precioF() {
            var usuario = prompt("Se encuentra dentro de San Nicolas o dentro del radio de 40Km?")
            var precio = 5000
            var envio = 800
            var fueradelRadio = precio + envio;
        if(usuario == "si"){
            alert("Su precio final es: $" + precio)
        }
        else {
            alert("Su precio final es: $" + fueradelRadio)
        }
    }
