// Formulario de Contacto


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional

    // Obtener valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validación simple
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar mensaje de confirmación
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
});