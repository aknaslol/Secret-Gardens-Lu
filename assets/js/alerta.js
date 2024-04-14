//Metodo que realiza una alerta de promociones utilizando jquery y sweetaler2 cuando se inicia el index de la pagina.
function mostrarPromociones() {
    Swal.fire({
      title: '¡Promociones disponibles!',
      text: 'No te pierdas nuestras ofertas especiales.',
      icon: 'info',
      iconColor: '#ff69b4',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn-rosado'
      }
    });
  }
  
  $(document).ready(function() {
    mostrarPromociones();
  });

