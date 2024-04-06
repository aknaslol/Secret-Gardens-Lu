//Metodo que lee la API en formato JSON y carga las imagenes de las propias marcas.

function cargarImagenes() {
    const apiUrl = 'https://raw.githubusercontent.com/aknaslol/Secret-Gardens-Lu/main/json/bisuteria.json';
    const contenedor = document.querySelector(".swiper-wrapper1");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(marca => {
                const imagen = marca.imagen;
                const imagenMarca = document.createElement("img");
                imagenMarca.src = imagen;
                contenedor.appendChild(imagenMarca);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

cargarImagenes();





    
