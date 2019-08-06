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
                console.log('Left key pressed');
                //handle left click
            break;
        case 38:
                console.log('Up key pressed');
                //handle up click
            break;
        case 39:
                console.log('Right key pressed');
                //handle right click
            break;
        case 40:
                console.log('Down key pressed');
                //handle down click
            break;
        }
    };

        // RESET BUTTON : TODO: CONNECT TO INIT
    document.querySelector('#reset').addEventListener("click", function() {console.log('reset button clicked')});



/*----- functions -----*/

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


    function makeMove(click) {

    }

    function render() {
        board.array.forEach(function(sq, idx) {

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