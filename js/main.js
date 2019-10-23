// 2048 OBJECT

let _2048 = {
    board: [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
    ],

    init: function() {
        this.render();
        this.reset();
    },

    reset: function() {
        let resetbutton = document.getElementById('reset');
        resetbutton.addEventListener('click', function(){
            console.log('button clicked');
            this.board = [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
            ];
            this.render();
        });
    },

    placeRandomTwo: function() {
        let openSpaces = [];
        this.board.forEach(function(rowArr, rowIdx) {
            if (rowArr.includes(0)) {
                rowArr.forEach(function(cell, idx) {
                    if (cell === 0) {
                        openSpaces.push([rowIdx, idx])
                    }
                })
            }
        });
        let selectedSpace = openSpaces[Math.floor(Math.random() * openSpaces.length)];
        this.board[selectedSpace[0]][selectedSpace[1]] = 2;
    },


    render: function() {
        this.placeRandomTwo();
        this.placeRandomTwo();
        this.board.forEach(function(row, rowIdx) {
            row.forEach(function(cell, colIdx) {
                let div = document.getElementById(`r${rowIdx}c${colIdx}`);
                if (div.cell !==0) {div.innerHTML = cell};
            });
        });
    },

    rotate: function () {
        return array.map((col, i) => array.map(row => row[i]));
    },
    
    shift: function() {
    },
    
    leftShift: function() {
        this.moves +=1;
    },
    
    upShift: function() {
        this.moves +=1;
    },
    
    rightShift: function() {
        this.moves +=1;
    },
    
    downShift: function() {
        this.moves +=1;
    },
    
    gameOver: function() {
        alert('Game Over');
    }, 
}

_2048.init();