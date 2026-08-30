// Hero Section - Efectos interactivos

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

// Efecto parallax en el hero
window.addEventListener('scroll', function() {
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Botón del hero
const heroBtn = document.querySelector('.hero .btn-primary');
if (heroBtn) {
    heroBtn.addEventListener('click', function() {
        const destinosSection = document.querySelector('#destinos');
        if (destinosSection) {
            destinosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('Hero.js cargado');
