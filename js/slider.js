// Slider - Carrusel de destinos (opcional)

class Slider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.destino-card');
        this.totalSlides = this.slides.length;
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlides();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlides();
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.currentSlide ? 'block' : 'none';
        });
    }
}

// Instanciar slider si es necesario
const slider = new Slider();

console.log('Slider.js cargado');
