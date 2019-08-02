
// checkforwin
// checkfor draw

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
                                    <td id="0" onClick="playGame(this.id)"><div class="py-3 display-1">${board[0]}</div></td>
                                    <td id="1" onClick="playGame(this.id)"><div class="py-3 display-1">${board[1]}</div></td>
                                    <td id="2" onClick="playGame(this.id)"><div class="py-3 display-1">${board[2]}</div></td>
                                </tr>
                                <tr class="table-secondary">
                                    <td id="3" onClick="playGame(this.id)"><div class="py-3 display-1">${board[3]}</div></td>
                                    <td id="4" onClick="playGame(this.id)"><div class="py-3 display-1">${board[4]}</div></td>
                                    <td id="5" onClick="playGame(this.id)"><div class="py-3 display-1">${board[5]}</div></td>
                                </tr>
                                <tr class="table-info">
                                    <td id="6" onClick="playGame(this.id)"><div class="py-3 display-1">${board[6]}</div></td>
                                    <td id="7" onClick="playGame(this.id)"><div class="py-3 display-1">${board[7]}</div></td>
                                    <td id="8" onClick="playGame(this.id)"><div class="py-3 display-1">${board[8]}</div></td>
                                </tr>`;

    }

    const resetBoard = () => {
        tableBody.innerHTML = "";
    }

    return { board, displayBoard, gameOne, gameTwo, showMessage, countTurn, winnerCombination };
})();

const game = (() => {
    
    const stopGame = () => { 
        Object.freeze(gameBoard.board);
    }

    const checkDraw = () => {
        (gameBoard.countTurn >= 9) && gameBoard.showMessage("Game Over! This is a draw!");        
    }

    const checkWin = (arr) => {
        (arr.length > 2) && 
            (gameBoard.winnerCombination.some((evt) => evt.every(e => arr.includes(e))) == true) &&
                (gameBoard.showMessage("You are the winner!!"));
    }

    return { checkDraw, checkWin, stopGame }
})();


let player1 = "X";
let player2 = "O";
let currentPlayer = 1;

function playGame(id) {

    if (currentPlayer == 1 && gameBoard.board[id] == "") {
        gameBoard.countTurn++;
        gameBoard.gameOne.push(parseInt(id));
        gameBoard.board[id] = player1;
        gameBoard.displayBoard();
        
        if (gameBoard.gameOne.length > 2 && (gameBoard.winnerCombination.some((evt) => evt.every(e => gameBoard.gameOne.includes(e))))) {
            gameBoard.showMessage("Player 1 wins!!");
            game.stopGame();
            return;
        }        
        gameBoard.showMessage("Turn: Player 2");
        currentPlayer++;
    } else if (currentPlayer != 1 && gameBoard.board[id] == "") {
        gameBoard.countTurn++;
        gameBoard.gameTwo.push(parseInt(id));
        gameBoard.board[id] = player2;
        gameBoard.displayBoard();
        if (gameBoard.gameTwo.length > 2 && (gameBoard.winnerCombination.some((evt) => evt.every(e => gameBoard.gameTwo.includes(e))))) {
            gameBoard.showMessage("Player 2 wins!!");
            gameBoard.displayBoard();
            game.stopGame();
            return;
        } 
        gameBoard.showMessage("Turn: Player 1");
        currentPlayer--;
    }

    game.checkDraw();
    
}

gameBoard.showMessage("Turn: Player 1");
gameBoard.displayBoard();