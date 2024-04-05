document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const resultDisplay = document.getElementById("result");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Create the Tic Tac Toe board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell-${i}`;
        cell.addEventListener("click", () => handleCellClick(i));
        board.appendChild(cell);
    }

    function handleCellClick(index) {
        if (gameBoard[index] === "" && !resultDisplay.textContent) {
            gameBoard[index] = currentPlayer;
            document.getElementById(`cell-${index}`).textContent = currentPlayer;

            if (checkWin()) {
                resultDisplay.textContent = `${currentPlayer} wins!`;
            } else if (isBoardFull()) {
                resultDisplay.textContent = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => gameBoard[index] === currentPlayer)
        );
    }

    function isBoardFull() {
        return gameBoard.every(cell => cell !== "");
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        resultDisplay.textContent = "";
        currentPlayer = "X";

        // Clear the board
        const cells = document.getElementsByClassName("cell");
        Array.from(cells).forEach(cell => {
            cell.textContent = "";
        });
    }
});
