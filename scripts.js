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
    root: document.querySelector("#scrollArea"),
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




/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
