console.log('sanity check');


/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 
    var board, score, movesMade;

/*----- cached element references -----*/ 
    var emptySet;

/*----- event listeners -----*/ 
    document.onkeydown = function(event) {
        switch (event.keyCode) {
        case 37:
                //handle left click
                moveLeft();
            break;
        case 38:
                //handle up click
                moveUp()
            break;
        case 39:
                //handle right click
                moveRight();
            break;
        case 40:
                //handle down click
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

    function moveLeft(click) {
        console.log('Left key pressed');
        //push all non empty tiles into next available open cell starting with left most value
    }
    
    function moveUp(click) {
        console.log('Up key pressed');
        //push all non empty tiles into next available open cell starting with top most value
    }
    
    function moveRight(click) {
        console.log('Right key pressed');
        //push all non empty tiles into next available open cell starting with right most value
    }
    
    function moveDown(click) {
        console.log('Down key pressed');
        //push all non empty tiles down into next available open cell starting with bottom most value
    }
    

    
    function render() {
        board.forEach(function(rowArr, rowIdx) {
            rowArr.forEach(function(cell, colIdx) {
                let marker = document.getElementById(`r${rowIdx}c${colIdx}`);
                console.log(`rowArr: ${rowArr} ; rowIdx: ${rowIdx} ; cell: ${cell} ;  colIdx: ${colIdx}`);
                console.log(marker);


                // marker.checkForMatchColumn();
                // marker.checkForMatchRow();
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