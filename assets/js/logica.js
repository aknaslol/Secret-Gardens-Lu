//Metodo que cuando en el option se selecciona todos los productos se muestran.
//y que cuando son productos recientes se muestran los productos recientes y viceversa.

function filtrarProductos() {
    var seleccion = $('#filtro-productos').val();

    $('.card-box-a').each(function () {
        var producto = $(this);
        if ((seleccion === 'recientes' && !producto.hasClass('reciente')) ||
            (seleccion === 'pasados' && !producto.hasClass('pasado'))) {
            producto.fadeOut(300);
        } else {
            producto.fadeIn(300);
        }
    });
}

//Metodo que realiza validaciones en el html de contacto.

function enviarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var tema = document.getElementById('tema').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var genero = document.querySelector('input[name="genero"]:checked');


    if (nombre === '' || email === '' || tema === '' || mensaje === '' || !genero) {
        Swal.fire({
            title: '¡Error!',
            text: 'Por favor, complete todos los campos necesarios.',
            icon: 'error',
            iconColor: '#ff69b4',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'btn-rosado'
            }
        })
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: '¡Error!',
            text: 'Por favor, introduzca un correo electrónico válido.',
            icon: 'error',
            iconColor: '#ff69b4',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'btn-rosado'
            }
        });
        return;
    }

    document.getElementById('contactoFormulario').submit();
    Swal.fire({
        title: 'Envío con éxito!',
        text: 'Se ha enviado tu correo exitosamente.',
        icon: 'success',
        iconColor: '#ff69b4',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'btn-rosado'
        }
    });

    setTimeout(limpiarCampos, 500);
}


//Metodo que limpia los campos del html de contacto.
function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tema').value = '';
    document.getElementById('mensaje').value = '';
}

//Metodo que realiza una validacion con Jquery para el apartado de subscripcion del footer.
$(document).ready(function () {

    $('#correoSub').submit(function (event) {
        event.preventDefault();
        var email = $('#emailSub').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, introduzca un correo electrónico válido.',
                icon: 'error',
                iconColor: '#ff69b4',
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'btn-rosado'
                }
            });
        } else {
            setTimeout(function () {
                Swal.fire({
                    title: '¡Muchas gracias por suscribirte!',
                    text: 'Estaremos avisandote de nuestros futuros productos y noticias.',
                    icon: 'success',
                    iconColor: '#ff69b4',
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        confirmButton: 'btn-rosado'
                    }
                });
                $('#emailSub').val("");
            }, 1000);
        }
    });
});
