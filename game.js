document.addEventListener('DOMContentLoaded', function () {
    var resetButton = document.getElementById('reset-score');
    var playerClasses = {
        'playerA': 'red',
        'playerB': 'blue'
    };
    var fields = document.querySelectorAll('.board > div');
    var scores = {
        'playerA': 0,
        'playerB': 0
    }
    var currentPlayer;
    var emptyFields;

    initGame();

    resetButton.addEventListener('click', function () {
        scores['playerA'] = 0;
        scores['playerB'] = 0;

        displayPlayerScore('playerA');
        displayPlayerScore('playerB');
    });

    function displayPlayerScore(player) {
        var score = document.getElementById(`${player}-score`);

        score.innerHTML = `${player} score: ${scores[player]}`;
    }

    function updatePlayerScore(player) {
        scores[player]++;
    }

    function displayRoundInformation() {
        var round = document.getElementById('round-info');

        round.className = playerClasses[currentPlayer];
        round.innerHTML = `Round for ${currentPlayer}`;
    }


    function initGame() {
        var fields = document.querySelectorAll('.board > div');

        currentPlayer = 'playerA';
        emptyFields = 9;
        fields.forEach(field => field.addEventListener('click', fieldClickHandler));
        fields.forEach(field => field.removeAttribute('class'));

        displayRoundInformation();
        displayPlayerScore('playerA');
        displayPlayerScore('playerB');
    }



    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

        console.log('clicked', this);

        if (currentPlayer === 'playerA') {
            currentPlayer = 'playerB';
        } else {
            currentPlayer = 'playerA';
        }
        displayRoundInformation();
        this.removeEventListener('click', fieldClickHandler);
        emptyFields--;
        console.log(emptyFields);
        checkWinner();
        if (emptyFields === 0) {
            setTimeout(function () {
                alert("I am an alert box!");
            }, 800);
            setTimeout(function () {
                initGame();
            }, 1500);
        }
    }

    function checkWinner() {
        var row1 = fields[0].className + fields[1].className + fields[2].className;
        var row2 = fields[3].className + fields[4].className + fields[5].className;
        var row3 = fields[6].className + fields[7].className + fields[8].className;

        var col1 = fields[0].className + fields[3].className + fields[6].className;
        var col2 = fields[1].className + fields[4].className + fields[7].className;
        var col3 = fields[2].className + fields[5].className + fields[8].className;

        var dia1 = fields[0].className + fields[4].className + fields[8].className;
        var dia2 = fields[2].className + fields[4].className + fields[6].className;


        if (row1 === 'redredred' ||
            row2 === 'redredred' ||
            row3 === 'redredred' ||
            col1 === 'redredred' ||
            col2 === 'redredred' ||
            col3 === 'redredred' ||
            dia1 === 'redredred' ||
            dia2 === 'redredred'
        ) {
            setTimeout(function () {
                alert("Red win!");
            }, 600);
            setTimeout(function () {
                updatePlayerScore('playerA');
                initGame();
            }, 1500);
        }
        if (row1 === 'blueblueblue' ||
            row2 === 'blueblueblue' ||
            row3 === 'blueblueblue' ||
            col1 === 'blueblueblue' ||
            col2 === 'blueblueblue' ||
            col3 === 'blueblueblue' ||
            dia1 === 'blueblueblue' ||
            dia2 === 'blueblueblue'
        ) {
            setTimeout(function () {
                alert("Blue win!");
            }, 800);
            setTimeout(function () {
                updatePlayerScore('playerB');
                initGame();
            }, 1500);
        }
    }
});
