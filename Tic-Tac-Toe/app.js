let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let btn = document.querySelector("#mode"); //color mode change

let scoreO = 0;
let scoreX = 0;
let scoreOElement = document.getElementById("scoreO");
let scoreXElement = document.getElementById("scoreX");

let turnO = true;

let winPatterns = [         //checking for winning patterns
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
            } else {
                box.innerText = "X";
            }
            turnO = !turnO;
            checkWinner();
        }
    });
});

const disableBoxes = () => {             //disable the buttons when a match is finished 
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {             //enable again when the rematch start
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {                            // score counter
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    if (winner === "O") {
        scoreO++;
        scoreOElement.innerText = scoreO;
    } else if (winner === "X") {
        scoreX++;
        scoreXElement.innerText = scoreX;
    }

    disableBoxes();
};

const checkWinner = () => {
    let winner = null;
    // Check for winning patterns
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            winner = pos1;
            break;
        }
    }

    if (winner !== null) {
        showWinner(winner);
        return;
    }

    let filledBoxes = 0;                //draw check by counting empty boxes
    for (let box of boxes) {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    }
    if (filledBoxes === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
        return;
    }
};

reset.addEventListener("click", () => {
    enableBoxes();
    msgContainer.classList.add("hide");
    turnO = true;
});

let currMode = 'light';
btn.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark';
        document.querySelector("body").style.backgroundColor = "lightblue";
    } else {
        currMode = 'light'
        document.querySelector("body").style.backgroundColor = "aquamarine";

    }
    console.log(currMode);
});
