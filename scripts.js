var videos = document.querySelectorAll('video');

function videoPause() {
  for(video of videos) { 
  video.pause();
  }
}



// Pruebas de audio automatico con scroll
const body = document.getElementById(".body");
const audioscroll = document.querySelectorAll(".audioscroll");


const options = {
    root: null,
    rootMargin: "-40px",
    threshold: 0.6,
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            //elemento visible
            entry.target.play();
        }else{
            entry.target.pause();
        }
    });
}, options);



function multimediaFoco(entries){
    let entry = entries[0];
    if(entry.isIntersecting){
        //elemento visible
        audioscroll.play();
    }
    else{
        audioscroll.pause();
    }
}

audioscroll.forEach(audioscroll => { 
    observer.observe(audioscroll);
});


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

/* PRUEBAS MAPA */

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});


var bounds = [[0,0], [1551,1142]];
var image = L.imageOverlay('img/mapa-cordoba.jpg', bounds).addTo(map);

map.fitBounds(bounds);


var marker = L.marker([998, 485]).addTo(map);
marker.bindPopup("    <img src='img/fotos/03.jpg' style='width: 100%;'><b>Escuela Normal Alejandro Carbó</b><br>Av. Colón 2000. Aquí fue la primera escuela normal, donde dio clases Jennie Howard.").openPopup();


