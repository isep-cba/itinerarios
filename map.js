/* MAPA INTERACTIVO 
documentacion https://leafletjs.com/reference.html
*/


var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});


var bounds = [[0,0], [1551,1142]];
var image = L.imageOverlay('img/mapa-cordoba.jpg', bounds).addTo(map);

map.fitBounds(bounds);


var marker = L.marker([998, 485]).addTo(map);
marker.bindPopup("    <img src='img/mapa-cordoba.jpg' style='width: 100%;'><b>Escuela Normal Alejandro Carbó</b><br>Av. Colón 2000. Aquí fue la primera escuela normal, donde dio clases Jennie Howard.").openPopup();
