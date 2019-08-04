/* eslint-disable */
const gameBoard = (() => {
    let countTurn = 0;
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameOne = [];
    let gameTwo = [];

    const tableBody = document.getElementById('table-body');
    const alert = document.getElementById('alert');

    const winnerCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const showMessage = (mesg) => {
        alert.innerHTML = mesg;
    }

    const displayBoard = () => {
        resetBoard();
        tableBody.innerHTML += `<tr class="table-primary">
                                    <td id="0" onClick="game.playGame(this.id)"><div class="py-3">${board[0]}</div></td>
                                    <td id="1" onClick="game.playGame(this.id)"><div class="py-3">${board[1]}</div></td>
                                    <td id="2" onClick="game.playGame(this.id)"><div class="py-3">${board[2]}</div></td>
                                </tr>
                                <tr class="table-primary">
                                    <td id="3" onClick="game.playGame(this.id)"><div class="py-3">${board[3]}</div></td>
                                    <td id="4" onClick="game.playGame(this.id)"><div class="py-3">${board[4]}</div></td>
                                    <td id="5" onClick="game.playGame(this.id)"><div class="py-3">${board[5]}</div></td>
                                </tr>
                                <tr class="table-primary">
                                    <td id="6" onClick="game.playGame(this.id)"><div class="py-3">${board[6]}</div></td>
                                    <td id="7" onClick="game.playGame(this.id)"><div class="py-3">${board[7]}</div></td>
                                    <td id="8" onClick="game.playGame(this.id)"><div class="py-3">${board[8]}</div></td>
                                </tr>`;

    }

    const resetBoard = () => {
        tableBody.innerHTML = "";
    }

    return { board, displayBoard, gameOne, gameTwo, showMessage, countTurn, winnerCombination };
})();


const game = (() => {
    let getName1, getName2;
    let player1 = "X";
    let player2 = "O";
    let currentPlayer = 1;

    const alert = document.getElementById("alert");
    const inputForms = document.getElementById("input");
    const startButton = document.getElementById('start');
    const restartButton = document.getElementById('restart');

    const startGame = () => {
        hide(restartButton);
        startButton.addEventListener('click', function () {
            getName1 = document.getElementById('name1').value;
            getName2 = document.getElementById('name2').value;
            if (getName1 != "" && getName2 != "") {
                hide(startButton);
                hide(inputForms);
                gameBoard.showMessage(`Start: ${getName1}`);
                alert.style.backgroundColor = "orange";
                alert.style.color = "black";
                gameBoard.displayBoard();
            } else {
                alert.textContent = "You must enter names to start.";
                alert.style.backgroundColor = "orange";
                alert.style.color = "black";
            }
        });
    }

    const stopGame = () => {
        Object.freeze(gameBoard.board);
    }

    const hide = (element) => {
        element.style.display = "none";
    }

    const show = (element) => {
        element.style.display = "block";
    }

    const playGame = (id) => {
        if (currentPlayer == 1 && gameBoard.board[id] == "") {
            gameRecord(player1, gameBoard.gameOne, id);

            if (gameBoard.gameOne.length > 2 && (gameBoard.winnerCombination.some((evt) => evt.every(e => gameBoard.gameOne.includes(e))))) {
                gameBoard.showMessage(`${getName1} Wins!!`);
                stopGame();
                show(restartButton);
                return;
            }
            gameBoard.showMessage(`Turn: ${getName2}`);
            currentPlayer++;
        } else if (currentPlayer != 1 && gameBoard.board[id] == "") {
            gameRecord(player2, gameBoard.gameTwo, id);
            if (gameBoard.gameTwo.length > 2 && (gameBoard.winnerCombination.some((evt) => evt.every(e => gameBoard.gameTwo.includes(e))))) {
                gameBoard.showMessage(`${getName2} Wins!!`);
                gameBoard.displayBoard();
                stopGame();
                show(restartButton);
                return;
            }
            gameBoard.showMessage(`Turn: ${getName1}`);
            currentPlayer--;
        }
        checkDraw();
    }

    const gameRecord = (player, arr, id) => {
        gameBoard.countTurn++;
        arr.push(parseInt(id));
        gameBoard.board[id] = player;
        gameBoard.displayBoard();
    }

    const checkDraw = () => {
        if (gameBoard.countTurn >= 9) {
            gameBoard.showMessage("Game Over! This is a draw!") && show(restartButton);
            show(restartButton);
        }
    }

    const checkWin = (arr) => {
        (arr.length > 2) &&
            (gameBoard.winnerCombination.some((evt) => evt.every(e => arr.includes(e))) == true) &&
            (gameBoard.showMessage("You are the winner!!"));
    }

    return { playGame, checkDraw, checkWin, stopGame, startGame }
})();

game.startGame();
