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
        ];
        movesMade = 0;
        score = 0;
        render();
    }

    function render() {
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
                let div = document.getElementById(`r${rowIdx}c${colIdx}`);
                div.style.backgroundColor = 'yellow';

                console.log(`rowArr: ${rowArr} ; rowIdx: ${rowIdx} ; cell: ${cell} ;  colIdx: ${colIdx}`);
                console.log(div.id);


        // $('board').each(function(idx) {
        //     console.log( idx + ': ' + this.innerHTML );
        //     });

                // div.checkForMatchColumn();
                // div.checkForMatchRow();
            });

        });
    }
    function moveLeft(click) {
        console.log('Left key pressed');
        direction = 'left';
        movesMade += 1;
        //push all non empty tiles into next available open cell starting with left most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
                
            });
        });

    }
    
    function moveUp(click) {
        console.log('Up key pressed');
        direction = 'up';
        movesMade += 1;
        //push all non empty tiles into next available open cell starting with top most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });

    }
    
    function moveRight(click) {
        console.log('Right key pressed');
        direction = 'right';
        movesMade ++;
        //push all non empty tiles into next available open cell starting with right most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });

    }
    
    function moveDown(click) {
        console.log('Down key pressed');
        direction = 'down';
        movesMade += 1;
        //push all non empty tiles down into next available open cell starting with bottom most value
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
            });
        });

    }

    function genRadomTwo() {
        // generates two intergers '2' in two random cells on the board
        board[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 3)] = 2
        console.log(board);
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
                console.log(`r${rowIdx}c${colIdx}`)
            });
        });

    }
    


    function checkForMatchRow() {

    }

    function checkForMatchColumn() {

    }

    function addAndDelete() {


    }

    function addNewNumber() {

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