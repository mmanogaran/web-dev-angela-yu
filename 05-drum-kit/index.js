function soundDrums(key) {
    let audio = new Audio();
    switch (key) {
        case "w":
            audio.src = "sounds/tom1.mp3";
            break;
        case "a":
            audio.src = "sounds/tom2.mp3";
            break;
        case "s":
            audio.src = "sounds/tom3.mp3";
            break;
        case "d":
            audio.src = "sounds/tom4.mp3";
            break;
        case "j":
            audio.src = "sounds/snare.mp3";
            break;
        case "k":
            audio.src = "sounds/crash.mp3";
            break;
        case "l":
            audio.src = "sounds/kick.mp3";
            break;
    }
    audio.play();
}

const drums = document.querySelectorAll(".drum");
drums.forEach(drum => {
    drum.addEventListener('mousedown', event => {
        const key = event.target.innerHTML;
        soundDrums(key);
        document.querySelector(`.${key}`).classList.add('pressed');
    })
    drum.addEventListener('mouseup', event => {
        const key = event.target.innerHTML;
        document.querySelector(`.${key}`).classList.remove('pressed');
    })
})

document.addEventListener("keydown", event => {
    const key = event.key;
    soundDrums(key);
    document.querySelector(`.${key}`).classList.add('pressed');
});
document.addEventListener("keyup", event => {
    const key = event.key;
    document.querySelector(`.${key}`).classList.remove('pressed');
});