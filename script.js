let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                    [1, 4, 7], [2, 5, 8], [0,  4, 8], [2, 4, 6]];


const resetGame = () => {
    turn0 = true;
    enableButtons();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos1 === pos3){
                showWinner(pos1);
            }
        }
    }
}
const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;     
    msgContainer.classList.remove("hide");
    disableButtons();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
