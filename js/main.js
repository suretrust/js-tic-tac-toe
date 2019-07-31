// Create game function
// Display game board
// Create two players
// Allow players to play
// One player plays "X", the other plays "O" (replace)
// If "X" or "O" is already in the array, give errors message
// 

let gameSpaces = [1,2,3,4,5,6,7,8,9];

function replaceValue(value) {
    gameSpaces[value] = 'Testing!!';
    displayBoard(gameSpaces);
}

function ticTacToe(player1, player2) {
    const players = [player1,player2];
}

const player1 = () => Player(players[0], "X");
const player2 = () => Player(players[1], "O");

const Player = (name, symbol) => {
    return {name, symbol};
};

// gameSpaces[gameSpaces.indexOf(1)]

function playGame(player) {
    const tableBody = document.getElementById('td').innerHTML;
    tableBody.addEventListener('click', )
    if (player == players[0]) {
        player1();
    } else {
        player2();
    }
}

function displayBoard(gameSpaces) {
    const tableBody = document.getElementById('table-body');
    const resetBoard = () => { tableBody.innerHTML = '' };
    const fillBoard = () => {
        tableBody.innerHTML += `<tr>
                                    <td id="td" onClick="replaceValue(${0});">${gameSpaces[0]}</td>
                                    <td id="td" onClick="replaceValue(${1});">${gameSpaces[1]}</td>
                                    <td id="td" onClick="replaceValue(${2});">${gameSpaces[2]}</td>
                                </tr>
                                <tr>
                                    <td id="td" onClick="replaceValue(${3});">${gameSpaces[3]}</td>
                                    <td id="td" onClick="replaceValue(${4});">${gameSpaces[4]}</td>
                                    <td id="td" onClick="replaceValue(${5});">${gameSpaces[5]}</td>
                                </tr>
                                <tr>
                                    <td id="td" onClick="replaceValue(${6});">${gameSpaces[6]}</td>
                                    <td id="td" onClick="replaceValue(${7});">${gameSpaces[7]}</td>
                                    <td id="td" onClick="replaceValue(${8});">${gameSpaces[8]}</td>
                                </tr>`;
    };
    return { fillBoard };
}

displayBoard(gameSpaces);

