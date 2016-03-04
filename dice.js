var allDice = [];

var Die = function() {
    this.roll = function() {
        this.value = Math.ceil(Math.random() * 6);
        $('#' + this.id).text(this.value);
        return this.value;
    }
}


$(document).ready(function() {
    $('#add').on("click", function() {
        allDice.push(new Die());
        allDice[allDice.length - 1].roll();
        allDice[allDice.length - 1].id = allDice.length - 1;
        $('body').append('<div class="die" id=' + (allDice.length - 1) + '>' + allDice[allDice.length - 1].value + '</div>')
    });
    
    $('#roll').on("click", function() {
        for (var i = 0; i < allDice.length; i++) {
            allDice[i].roll();
            console.log(allDice[i].value);
        }
    });

    
    
});



