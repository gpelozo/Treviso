//Cuando el usuario haga click en el boton hamburguesa, permutara entre ocultar y mostrar el menu desplegable
function myFunction(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");
}

//esto sirve para cerrar el menu si el usuario hace click fuera del menu desplegable
window.onclick = function(event) {

  if (!event.target.matches('hamburguesa')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
