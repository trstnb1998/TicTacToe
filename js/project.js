//make a variable for user's first choice
let choice = 'X';
let choice2 = 'O';
let endGame = true;
let gameMessage = '';

//make function that has an (event) parameter 
const addX = function(event) {
    const tileElement = event.target;//getting the element the event targeted
    let tileText = $(tileElement).text();//getting the tileElement and getting the text and assigning it to tileText(in a new variable)

    //allows for players to take turns
    if (!(tileText)) {
        $(tileElement).text(choice);//sets the text of tileElement to be (choice)
        if (choice === 'X') {
            choice = 'O';
        } else if (choice === 'O') {
            choice = 'X';
        } 
    }
    checkWinner();
}

//check winning conditions
const checkWinner = function() {
    //check horizontal X
    if (
        $('#1').text() == 'X' && $('#2').text() == 'X' && $('#3').text() == 'X' ||
        $('#4').text() == 'X' && $('#5').text() == 'X' && $('#6').text() == 'X' ||
        $('#7').text() == 'X' && $('#8').text() == 'X' && $('#9').text() == 'X'
    ) {
        $('.result').show();
        $('#winningMessage').text('PLAYER 1 WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#2').text() == 'O' && $('#3').text() == 'O' ||
        $('#4').text() == 'O' && $('#5').text() == 'O' && $('#6').text() == 'O' ||
        $('#7').text() == 'O' && $('#8').text() == 'O' && $('#9').text() == 'O'
    ) {
        $('.result').show();
        $('#winningMessage').text('PLAYER 2 WINS!');
        return;
    }

    //check vertical X
    if (
        $('#1').text() == 'X' && $('#4').text() == 'X' && $('#7').text() == 'X' ||
        $('#2').text() == 'X' && $('#5').text() == 'X' && $('#8').text() == 'X' ||
        $('#3').text() == 'X' && $('#6').text() == 'X' && $('#9').text() == 'X'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER 1 WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#4').text() == 'O' && $('#7').text() == 'O' ||
        $('#2').text() == 'O' && $('#5').text() == 'O' && $('#8').text() == 'O' ||
        $('#3').text() == 'O' && $('#6').text() == 'O' && $('#9').text() == 'O'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER 2 WINS!');
        return;
    } 

    //check diagonal X
    if ($('#1').text() == 'X' && $('#5').text() == 'X' && $('#9').text() == 'X' || 
        $('#3').text() == 'X' && $('#5').text() == 'X' && $('#7').text() == 'X'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER 1 WINS!');
        return;
    } else if (
        $('#1').text() == 'O' && $('#5').text() == 'O' && $('#9').text() == 'O' || 
        $('#3').text() == 'O' && $('#5').text() == 'O' && $('#7').text() == 'O'
    ) {
        $('.result').show()
        $('#winningMessage').text('PLAYER 2 WINS!');
        return;
    }

    //check draw
    if ($('#1').text() && $('#2').text() && $('#3').text() && $('#4').text() && $('#5').text() && $('#6').text() && $('#7').text() && $('#8').text() && $('#9').text()) {
        $('.result').show()
        $('#winningMessage').text('DRAW!')
        return;
    }
}

const hideResult = function() {
    $('.result').hide()
    $('.tile').text('')
}
//when .tile is clicked it will call addX function
const init = function() {
    $('.tile').on('click', addX);
    $('#resetButton').on('click', hideResult);
}
//when doc is ready run (init)
$(document).ready(init)