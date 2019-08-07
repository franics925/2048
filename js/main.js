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
            // [null, null, null, null],
            // [null, null, null, null],
            // [null, null, null, null],
            // [null, null, null, null]
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
    function moveLeft() {
        console.log('Left key pressed');
        direction = 'left';
        movesMade += 1;
        //push all non empty tiles into next available open cell starting with left most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
                
            });
        });
        getRandomTwo();
        console.log(board);
        render();
    }
    
    function moveUp() {
        console.log('Up key pressed');
        direction = 'up';
        movesMade += 1;
        //push all non empty tiles into next available open cell starting with top most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });
        getRandomTwo();
        console.log(board);
        render();
    }
    
    function moveRight() {
        console.log('Right key pressed');
        direction = 'right';
        movesMade ++;
        //push all non empty tiles into next available open cell starting with right most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });
        getRandomTwo();
        console.log(board);
        render();
    }
    
    function moveDown() {
        console.log('Down key pressed');
        direction = 'down';
        movesMade += 1;
        //push all non empty tiles down into next available open cell starting with bottom most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });
        getRandomTwo();
        console.log(board);
        render();
    }

    function getRandomTwo() {
        // generates two intergers '2' in two random cells on the board
        board[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2
      }
    


    function checkForMatchRow() {

    }

    function checkForMatchColumn() {

    }

    function addAndDelete() {


    }

    function checkGameOver() {

    }


    //     // the "document ready" approach 
    // $(document).ready(function() {
    //     // all of your app's js goes within this function
    //     alert("Everything is ready, let's do this");
    // });
    
    // // or, the shortcut version
    // $(function(){
    //     // all of your app's js goes within this function
    //     alert("Everything is ready, let's do this");
    // });