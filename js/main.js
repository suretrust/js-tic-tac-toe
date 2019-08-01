
const gameBoard = (() => {
    let board = [":",":",":",":",":",":",":",":",":"];
    const tableBody = document.getElementById('table-body');

    const displayBoard = () => {
        tableBody.innerHTML += `<tr class="table-primary">
                                    <td id="0" onClick="player${playGame.takeTurns()}.play(this.id)"><div class="py-3 display-1">${board[0]}</div></td>
                                    <td id="1" onClick="player${playGame.takeTurns()}.play(this.id)"><div class="py-3 display-1">${board[1]}</div></td>
                                    <td id="2" onClick="player${playGame.takeTurns()}.play(this.id)"><div class="py-3 display-1">${board[2]}</div></td>
                                </tr>
                                <tr class="table-secondary">
                                    <td id="3"><div class="py-3 display-1">${board[3]}</div></td>
                                    <td id="4"><div class="py-3 display-1">${board[4]}</div></td>
                                    <td id="5"><div class="py-3 display-1">${board[5]}</div></td>
                                </tr>
                                <tr class="table-info">
                                    <td id="6"><div class="py-3 display-1">${board[6]}</div></td>
                                    <td id="7"><div class="py-3 display-1">${board[7]}</div></td>
                                    <td id="8"><div class="py-3 display-1">${board[8]}</div></td>
                                </tr>`;

    }

    const resetBoard = () => {
       tableBody.innerHTML = "";
    }
    
    return {board, displayBoard, resetBoard};
})();

const player = (name, symbol) => {
    const play = (id) => {
        gameBoard.board[id] = symbol;
        gameBoard.resetBoard();
        gameBoard.displayBoard();
    }

    return {name, symbol, play};
};

const playGame = (() => {
    const takeTurns = () => {
        
    }
    
})();

const player0 = player("Player One", 'X');
const player1 = player("Player Two", 'O');

gameBoard.displayBoard();