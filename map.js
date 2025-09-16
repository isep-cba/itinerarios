/* MAPA INTERACTIVO 
documentacion https://leafletjs.com/reference.html
*/


var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 0.03
});


var bounds = [[200,200], [4000,8000]];
var image = L.imageOverlay('img/mapa-cba.png', bounds).addTo(map);

map.fitBounds(bounds);

var pin = L.icon({
    iconUrl: 'img/pin.png',

    iconSize:     [50, 100], // size of the ico9
    iconAnchor:   [50, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-20, -90] // point from which the popup should open relative to the iconAnchor
});


var cruzdeleje = L.marker([3700, 3080],{icon: pin}).addTo(map);
cruzdeleje.bindPopup("<h1>1917</h1><br><em>Escuela Normal Superior República del Perú</em><br>Cruz del Eje");

var sanfrancisco = L.marker([2760, 6380],{icon: pin}).addTo(map);
sanfrancisco.bindPopup("<h1>1912</h1><br><em>Escuela Normal Nacional</em><br>San Francisco");

var alberdi = L.marker([2760, 3710],{icon: pin}).addTo(map);
alberdi.bindPopup("<h1>1906</h1><br><em>Escuela Graduada Superior Normal Provincial de Niñas Juan Bautista Alberdi</em><br>Córdoba Capital");

var maestras = L.marker([2820, 3810],{icon: pin}).addTo(map);
maestras.bindPopup("<h1>1884</h1><br><em>Escuela Normal Nacional de Maestras </em><br>Córdoba Capital");

var olmos = L.marker([2730, 3910],{icon: pin}).addTo(map);
olmos.bindPopup("<h1>1909</h1><br><em>Escuela Normal Provincial para Varones Jose Vicente de Olmos </em><br>Córdoba Capital");

var riocuarto = L.marker([500, 3680],{icon: pin}).addTo(map);
riocuarto.bindPopup("<h1>1909</h1><br><em>Escuela Normal Nacional Mixta</em><br>Río Cuarto");

var bellville = L.marker([1200, 5650],{icon: pin}).addTo(map);
bellville.bindPopup("<h1>1909</h1><br><em>Escuela Normal Nacional Mixta</em><br>Bell Ville");

var villadolores = L.marker([2100, 2600],{icon: pin}).addTo(map);
villadolores.bindPopup("<h1>1910</h1><br><em>Escuela Normal Rural Mixta</em><br>Villa Dolores");