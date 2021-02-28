let dieNum = [];

for (let playerNum of [1, 2]) {
    dieNum[playerNum] = Math.floor(Math.random() * 6) + 1;
    let img = document.querySelector(`.img${playerNum}`);
    img.setAttribute("src", `images/dice${dieNum[playerNum]}.png`);
    img.setAttribute("alt", `Player ${playerNum} got a ${dieNum[playerNum]}`);
}

const heading = document.querySelector("h1");
let whoWon = "Draw!";
if (dieNum[1] > dieNum[2]) {
    whoWon = "Player 1 Wins!";
} else if (dieNum[1] < dieNum[2]) {
    whoWon = "Player 2 Wins!"
}
heading.innerText = whoWon;