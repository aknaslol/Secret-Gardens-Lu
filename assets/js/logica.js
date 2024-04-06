//Metodo que cuando en el option se selecciona todos los productos se muestran.
//y que cuando son productos recientes se muestran los productos recientes y viceversa.

function filtrarProductos(){
    var seleccion = $('#filtro-productos').val();

    $('.card-box-a').each(function() {
        var producto = $(this);
        if ((seleccion === 'recientes' && !producto.hasClass('reciente')) ||
            (seleccion === 'pasados' && !producto.hasClass('pasado'))) {
            producto.fadeOut(300);
        } else {
            producto.fadeIn(300);
        }
    });
}

