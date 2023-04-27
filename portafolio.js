function enviarMensaje() {
    var nombre = document.querySelector('input[type="text"][placeholder="Nombre Completo *"]').value;
    var email = document.querySelector('input[type="email"][placeholder="Dirección de Email"]').value;
    var tema = document.querySelector('input[type="text"][placeholder="Tema..."]').value;
    var mensaje = document.querySelector('textarea[placeholder="Tu Mensaje..."]').value;
    
    var mensajeFinal = "Nombre: " + nombre + "%0A" + "Email: " + email + "%0A" + "Tema: " + tema + "%0A" + "Mensaje: " + mensaje;
    
    var url = "https://api.whatsapp.com/send?phone=+543513466611&text=" + mensajeFinal;
    
    window.open(url);
  }


// Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var x = document.getElementById("menu-nav");
    x.classList.remove("desplegado");
}

// Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("menu-nav");
    if (x.classList.contains("desplegado")) {
        x.classList.remove("desplegado");
    } else {
        x.classList.add("desplegado");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("ds").classList.add("barra-progreso3");
        document.getElementById("edit").classList.add("barra-progreso4");
    }
}

const iconoNav = document.getElementById('icono-nav');
const nav = document.querySelector('nav');

iconoNav.addEventListener('click', function() {
    nav.classList.toggle('responsive');
});



