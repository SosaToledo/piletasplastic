//Animaciones
function detect(){
  tamPantalla = screen.width;
  var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  var elm = document.getElementById("descEmpresa");
  var pantalla = document.getElementById("main").scrollTop;
  var elm2 = document.getElementById('videEmpresa');
  if(es_chrome){
    if (pantalla > elm.offsetTop - 600 && tamPantalla >450){
      elm.className = "descEmpresa aparecer";
      elm2.className = "videEmpresa aparecer2"
    }
  }else {
    elm.style.visibility = "visible";
    elm2.style.visibility = "visible";
  }
}


// Este script es del slider de la Galeria
var slideIndex = 1;
var indice = 1;
showDivs(slideIndex);
// mostrarDiv(indice);
pasar();
// pasarAcc();

function sumarDivs(n) {
  showDivs(slideIndex += n);
}

function actualDiv(n) {
  showDivs(slideIndex = n);
}
function pasar(){
  showDivs(slideIndex+=1);
  setTimeout(pasar, 4000); // Change image every 2 seconds
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
