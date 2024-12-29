export const urlcarga = 'https://dog.ceo/api/breeds/image/random';
export let favoritos = [];

export function Generar() {
    const preloader = document.getElementById('preloader');
    const imagen2 = document.getElementById('imagendevuelta');

    preloader.style.display = 'block';
    imagen2.style.display = 'none';

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
            preloader.style.display = 'none';
            imagen2.src = imagen;
            imagen2.style.display = 'block';
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
            preloader.style.display = 'none';
        });
}

export function Favorito() {
    const imagen2 = document.getElementById('imagendevuelta');
    const imagen = imagen2.src;
    const nombre = prompt('Ingrese el nombre del perro favorito');
    const favorite = {
        name: nombre,
        image: imagen,
    };
    favoritos.push(favorite);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log(favoritos);
}