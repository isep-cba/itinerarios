
/* BOTON FULLSCREEN */

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* MAPA DE CORDOBA */

/* PRUEBAS MAPA */

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});


var bounds = [[0,0], [1551,1142]];
var image = L.imageOverlay('img/mapa-cordoba.jpg', bounds).addTo(map);

map.fitBounds(bounds);


var marker = L.marker([998, 485]).addTo(map);
marker.bindPopup("    <img src='img/mapa-cordoba.jpg' style='width: 100%;'><b>Escuela Normal Alejandro Carbó</b><br>Av. Colón 2000. Aquí fue la primera escuela normal, donde dio clases Jennie Howard.").openPopup();


/* NAVBAR  hide/show on scroll 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

*/