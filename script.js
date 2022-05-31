const video=document.querySelector('#video');
const play=document.querySelector('#play');
const stop=document.querySelector('#stop');
const progress=document.querySelector('#progress');
const timestamp=document.querySelector('#timestamp');


function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

function updateIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo(){
    video.currentTime=0;
    video.pause();
}

function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100;

    let min=Math.floor(video.currentTime/60);
    if(min<10){
        min='0'+String(min);
    }
    
    let sec=Math.floor(video.currentTime%60);
    if(sec<10){
        sec='0'+String(sec);
    }
    timestamp.innerText=min+':'+sec;
}

function setVideoProgress(){
    console.log('Hii');
    video.currentTime=+(progress.value*video.duration)/100;
}

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('play',updateIcon);
video.addEventListener('pause',updateIcon);
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('change',setVideoProgress);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);

