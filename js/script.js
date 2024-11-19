function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function toggleFAQ(faqElement) {
    const answer = faqElement.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

function scrollToContacto() {
    const contactoSection = document.getElementById('contacto');
    contactoSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const mensaje = this.mensaje.value.trim();

    if (!nombre || !correo || !mensaje) {
        showAlert("Por favor, completa todos los campos.");
        return;
    }

    // Simular un proceso exitoso (ya que no se envía a un servidor)
    showAlert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    this.reset(); // Reiniciar el formulario después de mostrar el mensaje
});

function showAlert(message) {
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = "block"; // Mostrar el modal
}

// Cerrar el modal cuando se hace clic en "x"
function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = "none"; // Ocultar el modal
}
