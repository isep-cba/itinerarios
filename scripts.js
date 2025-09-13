
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

