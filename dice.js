var allDice = [];

var Die = function() {
    this.value = null;
    this.roll = function() {
        this.value = Math.ceil(Math.random() * 6);
        $('#' + this.id).text(this.value);
        return this.value;
    }
    this.insert = function() {
        $('.container').append('<div class="die" id=' + this.id + '>' + this.value + '</div>');
        $("#" + this.id).on("click", function() {
            allDice[this.id].update();
        });
        $("#" + this.id).on("dblclick", function() {
            this.remove();
            delete allDice[this.id];
        });
    }
    this.update = function() {
        this.roll();
        $("#" + this.id).html(this.value);
    }
}


$(document).ready(function() {
    $('#add').on("click", function() {
        allDice.push(new Die());
        allDice[allDice.length - 1].roll();
        allDice[allDice.length - 1].id = allDice.length - 1;
        allDice[allDice.length - 1].insert();
    });
    
    $('#roll').on("click", function() {
        for (var i in allDice) {
            allDice[i].roll();
        }
    });
    
    $('#sum').on("click", function() {
        var sum = 0;
        for (var i in allDice) {
            sum += allDice[i].value;
        }
        alert("Sum of all dice: " + sum);
    });   
});



