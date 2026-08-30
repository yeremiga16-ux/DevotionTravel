// Funcionalidad de búsqueda

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const destinos = [
    'Playas del Caribe',
    'París, Francia',
    'Montañas de los Alpes',
    'Nueva York, USA',
    'Tokio, Japón',
    'Machu Picchu, Perú'
];

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            searchResults.innerHTML = '';
            return;
        }
        
        const resultados = destinos.filter(destino => 
            destino.toLowerCase().includes(query)
        );
        
        searchResults.innerHTML = resultados.map(r => 
            `<div class="search-result">${r}</div>`
        ).join('');
    });
}

console.log('Search.js cargado');