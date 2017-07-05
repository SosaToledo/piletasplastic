// Este script es del slider de la Galeria
var slideIndex = 1;
var indice = 1;
showDivs(slideIndex);
mostrarDiv(indice);
pasar();
pasarAcc();

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
//este script es del slider Accesorios

function addDivs(u) {
  mostrarDiv(indice += u);
}

function Div(u) {
  mostrarDiv(indice = u);
}
function pasarAcc(){
  mostrarDiv(indice+=1);
  setTimeout(pasarAcc, 4000); // Change image every 2 seconds
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
  if ( pos < 650) {
    var desc = pos/1000;
    portada.style.opacity = 0.7 - desc;
    if (portada.style.opacity < 0) {
      portada.style.opacity = 1;
    }
    if (pos < 20) {
      portada.style.opacity = 1;
    }
  }

}
