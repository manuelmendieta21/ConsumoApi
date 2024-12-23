const urlcarga = 'https://dog.ceo/api/breeds/image/random';

document.addEventListener('DOMContentLoaded', () => {
    Generar();
});

function Generar() {
    const preloader = document.getElementById('preloader');
    const imagen2 = document.getElementById('imagendevuelta');

    // Mostrar el preloader y ocultar la imagen
    preloader.style.display = 'block';
    imagen2.style.display = 'none';

    // Promesa para obtener la información de la URL
    fetch(urlcarga)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return Promise.reject('Error en la respuesta del servidor');
            }
        })
        .then(data => {
            const imagen = data.message;
            const status = data.status;
            console.log(data.status);

            // Ocultar el preloader y mostrar la imagen
            preloader.style.display = 'none';
            imagen2.src = imagen;
            imagen2.style.display = 'block';
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
            // Ocultar el preloader en caso de error
            preloader.style.display = 'none';
        });
}