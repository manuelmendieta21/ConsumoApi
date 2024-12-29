import { Favorito, Generar, favoritos } from './api_javascript.js';

// Llamar a `Generar` para cargar imágenes al iniciar
document.addEventListener('DOMContentLoaded', () => {
    Generar();
});

// Llamar a `Favorito` desde algún botón
const btnFavorito = document.getElementById('btnFavorito');
btnFavorito.addEventListener('click', () => {
    Favorito();
    console.log('Favoritos actuales:', favoritos);
});