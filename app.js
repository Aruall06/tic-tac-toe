/* NOTES
    - PSEUDOCODE:
            Display the contents of the board array
            Allows Player 1 to select a location on the bard for an X. The program should ask the user to enter the row and column number.
            Allows Player 2 to select a location on the bard for an O. The program should ask the user to enter the row and column number.
            Determines if a player won or a tie occurred.
            If a players wins the program declares the winner and exists.
            If a tie occurs the program declares result and exits.
            Player 1 wins if there are 3 consecutive Xs.
            Player 2 wins if there are 3 consecutive Os.
            The winning Xs or Os can appear in row, column or diagonally.
            A tie occurs when all of the locations on the board are full, but there is no winner.

    - BUILD THE BOARD
            DONE.

    - GO AND GET THE SQUARES FROM THE BOARD
            DONE.

    - MAKE CLICK EVENTS WORK
            DONE.

    - TURN COUNTER WITH MODULUS
            DONE.

    - WIN LOGIC -> DRAW -> WIN(LOSS) (DIAGONAL, ROWS, COLLUMNS) ARRAYS
            DONE.

    - RESET BUTTON
            DONE.

    - SCOREBOARD FOR ROUNDS
            DONE.

    - PIMP
*/

window.onload = function() {
/*
    GLOBAL VARIABLES
*/
var squareNum;
var turncount = 0;
var squares = Array.from(document.getElementsByTagName("td"));
var score = Array.from(document.getElementsByTagName("div"));
var clearButton = document.getElementById("clear");

/*
    ACTION LISTENERS
*/
  squares.forEach(function(square) {
    square.addEventListener("click", function(event) {
      if(!square.innerText){
        squareClick(square);
        winCondition();
      }
    });
  });

  clearButton.addEventListener("click", function(event) {
    squares.forEach(function(square) {
      square.innerText= "";

    })
  })


/*
    TURN COUNTER
*/
  function squareClick(squares){
    console.log("Button press");
    console.log(turncount%2);
    if (turncount%2 == 0)
        squares.innerText= "X";
    else
        squares.innerText= "O";
    turncount++;
  }

/*
    SCORE COUNTER
*/
function winCondition(){
    if (squares[0].innerText === "X" && squares[1].innerText === "X"  && squares[2].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[3].innerText === "X" && squares[4].innerText === "X"  && squares[5].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[6].innerText === "X" && squares[7].innerText === "X"  && squares[8].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[0].innerText === "X" && squares[1].innerText === "X"  && squares[6].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[1].innerText === "X" && squares[4].innerText === "X"  && squares[7].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[2].innerText === "X" && squares[5].innerText === "X"  && squares[8].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[0].innerText === "X" && squares[4].innerText === "X"  && squares[8].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[2].innerText === "X" && squares[4].innerText === "X"  && squares[6].innerText === "X"){

        var currentScore = score[2].innerText;
        currentScore++
        score[2].innerText = currentScore;
        resetTiles();

    }else if (squares[3].innerText === "O" && squares[4].innerText === "O"  && squares[5].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[6].innerText === "O" && squares[7].innerText === "O"  && squares[8].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[0].innerText === "O" && squares[1].innerText === "O"  && squares[6].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[1].innerText === "O" && squares[4].innerText === "O"  && squares[7].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[2].innerText === "O" && squares[5].innerText === "O"  && squares[8].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[0].innerText === "O" && squares[4].innerText === "O"  && squares[8].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[2].innerText === "O" && squares[4].innerText === "O"  && squares[6].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }else if (squares[0].innerText === "O" && squares[1].innerText === "O"  && squares[2].innerText === "O"){

        var currentScore = score[3].innerText;
        currentScore++
        score[3].innerText = currentScore;
        resetTiles();

    }
}

/*
    RESET TILES
*/
function resetTiles(){
    for (i = 0; i <= 8; i++){
        squares[i].innerText = '';
    }
}}
