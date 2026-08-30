// Main JavaScript - Funcionalidad principal

// Menu toggle para móvil
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Cerrar menú al hacer click en un link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Validación básica
        if (nombre && email && mensaje) {
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
            this.reset();
        } else {
            alert('Por favor completa todos los campos');
        }
    });
}

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar el estilo del header al scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('DevotionTravel - Página cargada correctamente');
