let round = 1;
let winner = [0];

function setDiceImages(imgs, values) {
    for (let i = 0; i < 2; i++) {
        imgs[i].setAttribute("src", `images/dice${values[i]}.png`);
        imgs[i].setAttribute("alt", `Player ${i + 1} got a ${values[i]}`);
    }
}

function rollDice() {
    // Get dice values
    let dieNums = [];
    dieNums[0] = Math.floor(Math.random() * 6) + 1;
    dieNums[1] = Math.floor(Math.random() * 6) + 1;

    // Set center dice images
    const centerDice = document.querySelectorAll(" .center-dice img");
    setDiceImages(centerDice, dieNums);


    const heading = document.querySelector("h1");
    let headingText = `Round ${round}: `;

    // if there is a winner this round
    if (dieNums[0] !== dieNums[1]) {
        // Set dice images for current round
        const currRoundDice = document.querySelectorAll(`.round:nth-of-type(${round}) img`)
        setDiceImages(currRoundDice, dieNums);

        // Track who wins each round
        winner[round] = dieNums[0] > dieNums[1] ? 1 : 2;
        headingText += `Player ${winner[round]}!`;
        round++;
    } else {
        headingText += "Draw!"
    }
    heading.innerHTML = headingText;
}

// Roll dice every 3s
const intervalID = setInterval(function () {
    if (round <= 3) {
        rollDice();
    } else {
        window.clearInterval(intervalID);

        // Display final winner 3s after final round
        const heading = document.querySelector("h1");
        const player1Wins = winner.reduce((n, x) => n + (x === 1));
        const player2Wins = winner.reduce((n, x) => n + (x === 2));
        if (player1Wins > player2Wins) {
            heading.innerText = "Player 1 Wins!";
        } else {
            heading.innerText = "Player 2 Wins!";
        }
    }
}, 3000);

