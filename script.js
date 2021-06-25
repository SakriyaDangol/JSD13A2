window.addEventListener('keydown', soundPlay);

function soundPlay(event){

    const sound = document.getElementById(event.which).play();
    console.log(sound);

    sound.currentTime = 0;
}