document.addEventListener('DOMContentLoaded', function () {



    var playerClasses = {

        'playerA': 'red',
        'playerB': 'blue'
    };

    var currentPlayer;


    initGame();

    function initGame() {
        var fields = document.querySelectorAll('.board > div');

        currentPlayer = 'playerA'
        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
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
        this.removeEventListener('click',fieldClickHandler);
    }

});
