// Cargar imágenes de destinos
document.addEventListener('DOMContentLoaded', function() {
    // URLs de imágenes de Pexels (sin requerir API key)
    const images = {
        img1: 'https://images.pexels.com/photos/3050355/pexels-photo-3050355.jpeg?w=500&h=300&fit=crop',
        img2: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?w=500&h=300&fit=crop',
        img3: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?w=500&h=300&fit=crop',
        img4: 'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?w=500&h=300&fit=crop',
        img5: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?w=500&h=300&fit=crop',
        img6: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?w=500&h=300&fit=crop'
    };

    // Asignar imágenes a los elementos
    for (let id in images) {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundImage = `url('${images[id]}')`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundRepeat = 'no-repeat';
        }
    }

    console.log('Imágenes cargadas correctamente');
});
