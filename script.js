// Array con 3 textos diferentes
const textos = [
    "¡Bienvenido a nuestro sitio! Esperamos que disfrutes tu visita.",
    "Descubre nuestras ofertas y promociones especiales.",
    "Contáctanos para recibir más información o soporte."
  ];
  let indiceTexto = 0;
  
  // Array con 3 modos de color (clases definidas en styles.css)
  const modosColor = ["modo-1", "modo-2", "modo-3"];
  let indiceColor = 0;
  
  /**
   * Alterna el contenido del texto #contenido con 3 mensajes distintos.
   */
  function alternarTexto() {
    indiceTexto = (indiceTexto + 1) % textos.length;
    const contenido = document.getElementById("contenido");
    if (contenido) {
      contenido.innerText = textos[indiceTexto];
    }
  }
  
  /**
   * Alterna entre 3 estilos de color de fondo y texto, 
   * usando las clases .modo-1, .modo-2 y .modo-3
   */
  function alternarColor() {
    // Remover todas las clases modo-X
    document.body.classList.remove(...modosColor);
  
    // Agregar la siguiente clase
    indiceColor = (indiceColor + 1) % modosColor.length;
    document.body.classList.add(modosColor[indiceColor]);
  }
// Cuando el DOM esté cargado...
document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad para el botón de Log In
    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", function() {
        var usuario = document.getElementById("usuario").value;
        var password = document.getElementById("password").value;
        console.log("Log In:", "Usuario: " + usuario, "Contraseña: " + password);
      });
    }
  });
  
  // Formulario de registro

function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("passRegistro").value;
    
    var estrato = document.getElementById("estrato").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var grupoSanguineo = document.getElementById("grupoSanguineo").value;
  
    // Género (radio)
    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    var genero = generoSeleccionado ? generoSeleccionado.value : "";
  
    // Actividades (checkboxes)
    var checks = document.querySelectorAll('input[type="checkbox"]:checked');
    var actividades = [];
    checks.forEach((c) => actividades.push(c.value));
  
    // Expresiones regulares
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!regexEmail.test(email)) {
      alert("Correo inválido");
      return false;
    }
    if (!regexPass.test(pass)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo especial.");
      return false;
    }
  
    // Muestra TODOS los datos en el alert
    alert(
      "Registro exitoso!\n" +
      "Nombre: " + nombre + "\n" +
      "Apellido: " + apellido + "\n" +
      "Correo: " + email + "\n" +
      "Estrato: " + (estrato || "No definido") + "\n" +
      "Fecha Nacimiento: " + fechaNacimiento + "\n" +
      "Grupo Sanguíneo: " + (grupoSanguineo || "No definido") + "\n" +
      "Género: " + (genero || "No definido") + "\n" +
      "Actividades: " + (actividades.length > 0 ? actividades.join(", ") : "Ninguna")
    );
  
    // Evita enviar el formulario (efecto demo)
    return false;
  }
  