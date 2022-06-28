//saca la clase hidden para mostrar el contenido una vez cargado.
window.onload = function (){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}