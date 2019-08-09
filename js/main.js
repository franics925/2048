
/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
var board, movesMade;

/*----- cached element references -----*/ 
let direction;

/*----- event listeners -----*/ 
document.onkeydown = function(event) {
    switch (event.keyCode) {
    case 37:
            moveLeft();
        break;
    case 38:
            moveUp()
        break;
    case 39:
            moveRight();
        break;
    case 40:
            moveDown();
        break;
    }
};

    // RESET BUTTON : TODO: CONNECT TO INIT
document.querySelector('#reset').addEventListener("click", function() {
    console.log('reset button clicked');
    init();
});

/*----- functions -----*/

init();

function init() {
    board = [
        [0,0,0,0], // ROW 1
        [0,0,0,0], // ROW 2
        [0,0,0,0], // ROW 3
        [0,0,0,0], // ROW 4
    ];
    movesMade = 0;
    score = 0;
    getRandomTwo();
    getRandomTwo();
    render();
}

// Use DOM to make changes to visualized board
function render() {
    board.forEach(function(rowArr, rowIdx) {
        rowArr.forEach(function(cell, colIdx) {
            let div = document.getElementById(`r${rowIdx}c${colIdx}`);
            div.style.backgroundColor = '#iiiiii';
            if (div.cell !== 0) {
                div.textContent = cell;
            }
        });

    });
}

function moveLeft() {
    console.log('Left key pressed');
    direction = 'left';
    movesMade += 1;
    shiftLeft();
    getRandomTwo();
    render();
}


function moveUp() {
    console.log('Up key pressed');
    direction = 'up';
    board = rotate(board.reverse());
    shiftRight();
    board = rotate(board.reverse());
    board = rotate(board.reverse());
    board = rotate(board.reverse());
    getRandomTwo();
    render();
}

function moveRight() {
    console.log('Right key pressed');
    direction = 'right';
    shiftRight();
    getRandomTwo();
    render();
}

function moveDown() {
    console.log('Down key pressed');
    board = rotate(board.reverse());
    shiftLeft();
    board = rotate(board.reverse());
    board = rotate(board.reverse());
    board = rotate(board.reverse());
    getRandomTwo();
    render();
}

function rotate(array) {
    return array.map((col, i) => array.map(row => row[i]));
}


function getRandomTwo() {
    let openSpaces = [];
    board.forEach(function(rowArr, rowIdx) {
        if (rowArr.includes(0)) {
            rowArr.forEach(function(cell, idx) {
                if (cell === 0) {
                    openSpaces.push([rowIdx, idx])
                }
            })
        }
    });
    let selectedSpace = openSpaces[Math.floor(Math.random() * openSpaces.length)]
    board[selectedSpace[0]][selectedSpace[1]] = 2
}


function shiftLeft() {
    //push all non empty tiles into next available open cell starting with left most value
    board.forEach(function(rowArr, rowIdx) {
        row = board[rowIdx];
        // remove all zeroes from the array
        let newArr = row.filter(num => num !== 0);
        // loop through the remaining array, checking each set of items once
        for (let i = 0; i < newArr.length; i++) {
            // if two numbers are the same, add them
            if (newArr[i] === newArr[i+1]) {
                newArr[i] += newArr[i];
                newArr[i+1] = 0;
                // increment value of i again if there's a match, because those numbers can no longer be matched again
                i++
            }
        }
        // remove the sandwiched zeroes again, in order to "push" all numbers leftward
        newArr = newArr.filter(num => num !== 0);
        // add zeroes at the end to fill the array back up to the proper size
        while (newArr.length < rowArr.length) newArr.push(0);
        board[rowIdx] = newArr;
    });
}

function shiftRight() {
    board.forEach(function(rowArr, rowIdx) {
        row = board[rowIdx].reverse();
        // remove all zeroes from the array
        let newArr = row.filter(num => num !== 0);
        // loop through the remaining array, checking each set of items once
        for (let i = 0; i < newArr.length; i++) {
            // if two numbers are the same, add them
            if (newArr[i] === newArr[i+1]) {
                newArr[i] += newArr[i];
                newArr[i+1] = 0;
                // increment value of i again if there's a match, because those numbers can no longer be matched again
                i++
            }
        }
        // remove the sandwiched zeroes again, in order to "push" all numbers leftward
        newArr = newArr.filter(num => num !== 0);
        // add zeroes at the end to fill the array back up to the proper size
        while (newArr.length < rowArr.length) newArr.push(0);
        board[rowIdx] = newArr.reverse();
    });
}

function checkGameOver() {
    let counter, potentialPlays;
    let newBoard = board;


    board.forEach(function(rowArr, rowIdx) {
        rowArr.forEach(function(cell, colIdx) {
            if (cell ===0) {
                console.log(board[rowIdx][colIdx]);
            }
            // if (cell === 0) {
            //     counter += 1;
            // }
            
            // if ((newBoard[rowIdx][colIdx] !== 0) && (newBoard[rowIdx][colIdx] !== newBoard[rowIdx +1][colIdx]) 
            //     && (newBoard[rowIdx][colIdx] !== newBoard[rowIdx][colIdx + 1])) {
            //         counter += 1;
            //         console.log('check');
            //     }
        });
    });

    // board.forEach(function(rowArr, rowIdx) {
    //     row = board[rowIdx];
    //     // loop through the remaining array, checking each set of items once
    //     for (let i = 0; i < row.length; i++) {
    //         // if two numbers are the same, add them
    //         if (row[i] === row[i+1]) {
    //             potentialPlays += 1;
    //         }
    //     }
    // });
}