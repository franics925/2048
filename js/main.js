console.log('sanity check');


/*----- constants -----*/ 




/*----- app's state (variables) -----*/ 
    var board, score, movesMade;

/*----- cached element references -----*/ 
    var emptySet = [];
    let direction;

/*----- event listeners -----*/ 
    document.onkeydown = function(event) {
        switch (event.keyCode) {
        case 37:
                moveLeft();
                moveUp();
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

    let leftShift = (row) => {
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
    }

    function moveLeft() {
        console.log('Left key pressed');
        direction = 'left';
        movesMade += 1;
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
        getRandomTwo();
        console.log(board);
        render();
    }

    function rotate(array) {
        return array.map((col, i) => array.map(row => row[i]));
      }

    function moveUp() {
        board = rotate(board.reverse());
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

        console.log(board);

        board = rotate(board.reverse());
        board = rotate(board.reverse());
        board = rotate(board.reverse());
        console.log('Up key pressed');
        // direction = 'up';
        // movesMade += 1;


        getRandomTwo();
        // console.log(board);
        // rotate(board);
        
        render();
    }
    
    function moveRight() {
        console.log('Right key pressed');
        direction = 'right';
        //push all non empty tiles into next available open cell starting with RIGHT most value
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

        getRandomTwo();
        console.log(board);
        render();
    }
    
    function moveDown() {
        board = rotate(board.reverse());
        board = rotate(board.reverse());
        board = rotate(board.reverse());
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

        console.log(board);

        board = rotate(board.reverse());
        console.log('Up key pressed');
        // direction = 'up';
        // movesMade += 1;


        getRandomTwo();
        // console.log(board);
        // rotate(board);
        
        render();
    }

    function getRandomTwo() {
        // generates two intergers '2' in two random cells on the board
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


    function checkGameOver() {
        let gameOver = board.forEach(val, idx);

        
    }

