
// checkforwin
// checkfor draw

const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    const tableBody = document.getElementById('table-body');
    const alert = document.getElementById('alert');
    const showMessage = (mesg) => {
        alert.innerHTML = mesg;
    }
    const displayBoard = () => {
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
    
    return {board, displayBoard, resetBoard, showMessage};
})();

let player1 = "X";
let player2 = "O";
let currentPlayer = 1;
let takeTurn = 0;

function playGame(id){
    takeTurn++;
    if(currentPlayer == 1 && gameBoard.board[id] == ""){
        gameBoard.board[id] = player1;
        gameBoard.showMessage("Turn: Player 2");
        gameBoard.resetBoard();
        gameBoard.displayBoard();
        currentPlayer++;
    } else if (currentPlayer != 1 && gameBoard.board[id] == "") {
        gameBoard.board[id] = player2;
        gameBoard.showMessage("Turn: Player 1");
        gameBoard.resetBoard();
        gameBoard.displayBoard();
        currentPlayer--;
    }
}

gameBoard.showMessage("Turn: Player 1");
gameBoard.displayBoard();