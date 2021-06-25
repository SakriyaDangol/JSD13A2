// window.addEventListener('keydown', soundPlay);

const input = document.querySelector('input');
input.addEventListener('keyup', soundPlay);

function soundPlay(event){

    const sound = document.getElementById(event.which);
    console.log(sound);

    sound.currentTime = 0;
    sound.play();
}