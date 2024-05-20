
const urlcarga='https://dog.ceo/api/breeds/image/random'


function Generar(){
    fetch(urlcarga)
    //callback cambiarlo a un objeto json javascript
    .then(res => res.json())
    //otra promesas datos con la informacion 
    .then(data =>{
        const imagen = data.message;
        console.log(imagen)  
        const imagen2 = document.getElementById('imagendevuelta');
        imagen2.src = imagen;
        })
}