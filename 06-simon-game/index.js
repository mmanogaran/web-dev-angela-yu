const buttonColours = ['red', 'blue', 'green', 'yellow'];
const sounds = {
    red: new Audio(`sounds/red.mp3`),
    blue: new Audio(`sounds/blue.mp3`),
    green: new Audio(`sounds/green.mp3`),
    yellow: new Audio(`sounds/yellow.mp3`),
    wrong: new Audio('sounds/wrong.mp3')
}

let gamePattern = [];
let userClickedPattern = [];

let gameStarted = false;
let level = 0;

function animatePress(buttonID) {
    $(`#${buttonID}`).addClass('pressed');
    setTimeout(() => {
        $(`#${buttonID}`).removeClass('pressed');
    }, 150);
}

function nextSequence() {
    userClickedPattern = [];
    level++;

    $('#level-title').text(`Level ${level}`);

    const colourIndex = Math.floor(Math.random() * 4);
    const buttonID = buttonColours[colourIndex];
    gamePattern.push(buttonID);

    $(`#${buttonID}`).fadeIn(200).fadeOut(200).fadeIn(200);
    sounds[buttonID].play();
}

function startOver() {
    gamePattern = [];
    gameStarted = false;
    level = 0;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        sounds.wrong.play();
        $('body').addClass('game-over');
        $(`#level-title`).text('Game Over. Press A Key to Restart');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        startOver();
    }

}

$('.btn').on('click', function () {
    const clickedButtonID = $(this).attr('id');
    userClickedPattern.push(clickedButtonID);

    animatePress(clickedButtonID);
    sounds[clickedButtonID].play();

    checkAnswer(userClickedPattern.length - 1);
})

$(document).on('keydown', function () {
    if (!gameStarted) {
        gameStarted = true;
        $('#level-title').text('Level 0')
        nextSequence();
    }
})