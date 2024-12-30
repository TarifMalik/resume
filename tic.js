console.log("Welcome to Tic Tac Toe");
let gamebgm = new Audio("game-bgm.mp3")
let tapbgm = new Audio("tap-bgm.mp3");
let turn = "X";
let gameover = false;
const changeturn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let gametext = document.getElementsByClassName("gametext");
  let rollno = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  rollno.forEach((e) => {
    if (
      gametext[e[0]].innerText === gametext[e[1]].innerText &&
      gametext[e[2]].innerText === gametext[e[1]].innerText &&
      gametext[e[0]].innerText !== ""
    ) {
      document.querySelector(".turn").innerText =
        gametext[e[0]].innerText + " " + "won";
      gameover = true;
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((e) => {
  let spanEl = e.querySelector(".gametext");
  e.addEventListener("click", (i) => {
    if (spanEl.innerText === "") {
      spanEl.innerText = turn;
      turn = changeturn();
      checkWin();
       tapbgm.play();
      if (!gameover) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn" + " " + turn;
      }
    }
  });
});

const reset = document.getElementById("btn");
reset.addEventListener("click", () => {
  let gametext = document.querySelectorAll(".gametext");
  Array.from(gametext).forEach((e) => {
    e.innerText = "";
    turn = "X";
    gameover = false;
    document.getElementsByClassName("turn")[0].innerText =
      "This is turn" + " " + turn;
  });
});
