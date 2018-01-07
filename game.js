document.addEventListener('DOMContentLoaded', function () {


    var fields = document.querySelectorAll('.board > div');
    var playerClasses = {

        'playerA': 'red',
        'playerB': 'blue'
    };

    var currentPlayer;


    initGame();


    function initGame() {
        emptyFields = 9;
        currentPlayer = 'playerA'
        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)

        field.className=''
        });
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
        this.removeEventListener('click', fieldClickHandler);
        emptyFields--;
        console.log(emptyFields);
        checkWinner();
        if (emptyFields === 0) {
            setTimeout(function(){ alert("I am an alert box!"); }, 800);
            setTimeout(function(){ initGame(); }, 1500);
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
            setTimeout(function(){ alert("Red win!"); }, 600);
            setTimeout(function(){ initGame(); }, 1500);
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
            setTimeout(function(){ alert("Blue win!"); }, 800);
            setTimeout(function(){ initGame(); }, 1500);
        }
    }
});
