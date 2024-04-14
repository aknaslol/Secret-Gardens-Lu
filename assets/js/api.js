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
            slideMarcas();
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

//Metodo que realiza una animacion mediante un calculo de nodos con javascript.
function slideMarcas() {
    const slideContainer = document.querySelector('.swiper-wrapper1');
    const images = slideContainer.querySelectorAll('img');
    const imagesClone = Array.from(images).map(img => img.cloneNode(true));
    const totalWidth = images.length * images[0].clientWidth;
    let currentPosition = 0;

    imagesClone.forEach(img => slideContainer.appendChild(img));

    function animateSlide() {
        currentPosition -= 1;
        if (currentPosition <= -totalWidth) {
            currentPosition = 0;
        }
        slideContainer.style.transform = `translateX(${currentPosition}px)`;
    }

    setInterval(animateSlide, 30);
}

cargarImagenes();


