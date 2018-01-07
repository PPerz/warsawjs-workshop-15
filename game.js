document.addEventListener('DOMContentLoaded', function () {

    initGame();

    function initGame() {
        var fields = document.querySelectorAll('.board > div');


        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
        });
    }

    function fieldClickHandler() {
        this.classList.add("red");
        console.log('clicked', this);
    }

});
