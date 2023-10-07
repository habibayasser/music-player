
let progress = document.getElementById("progress")
let song = document.getElementById("songs")
let ctrlicon = document.getElementById("ctrlicon")

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;

}

function playsong(){

    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}



if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);

}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}


// register validation
let pass1 = document.getElementById("password");
let pass2 = document.getElementById("Rpassword");

function popup(){
if(pass1 !==pass2){
   prompt("passwrords don't matches")
   console.log("hi")

}}