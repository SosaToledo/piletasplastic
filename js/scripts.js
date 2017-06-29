// Este script es del slider de la Galeria
var slideIndex = 1;
var indice = 1;
showDivs(slideIndex);
mostrarDiv(indice);

function sumarDivs(n) {
  showDivs(slideIndex += n);
}

function actualDiv(n) {
  showDivs(slideIndex = n);
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
//este script es del slider Accesorios

function addDivs(u) {
  mostrarDiv(indice += u);
}

function Div(u) {
  mostrarDiv(indice = u);
}

function mostrarDiv(u) {
  var v;
  var h = document.getElementsByClassName("accesorio");
  var puntos = document.getElementsByClassName("demo2");
  if (u > h.length) {indice = 1}
  if (u < 1) {indice = h.length}
  for (v = 0; v < h.length; v++) {
     h[v].style.display = "none";
  }
  for (v = 0; v < puntos.length; v++) {
     puntos[v].className = puntos[v].className.replace(" white", "");
  }
  h[indice-1].style.display = "block";
  puntos[indice-1].className += " white";
}

function myFunction() {
  var portada = document.getElementById("portada");
  var pos = document.body.scrollTop;
  if (pos < 250) {
    portada.style.opacity = 1;
  }else if (pos > 250 && pos < 350) {
    portada.style.opacity = 0.6;
  }else if(pos > 350 && pos < 500 ) {
      portada.style.opacity = 0.3;
  }else if (pos > 500) {
    portada.style.opacity = 0.1;
  }

}
