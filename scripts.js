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