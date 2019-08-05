console.log('sanity check');


/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 
    var board, score, movesMade;

/*----- cached element references -----*/ 


/*----- event listeners -----*/ 

    //LEFT ARROW '37'
// document.onkeydown();
//     //UP ARROW '38'
// document.onkeydown();
//     //RIGHT ARROW '39'
// document.onkeydown();
//     //DOWN ARROW '40'
// document.onkeydown();



/*----- functions -----*/


/*Create 4x4 Flexbox 
Fill 2 random cells with value of 2
*/
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