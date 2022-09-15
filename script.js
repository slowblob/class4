let video=document.querySelector('video');
let play=document.querySelector('polygon')
let pause=document.querySelector('circle')
function playVideo(){
    video.play();
}
function pauseVideo(){
    video.pause();
}
play.addEventListener('click',playVideo);
pause.addEventListener('click',pauseVideo)
