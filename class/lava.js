var all = require("./yndanur.js");
module.exports = class Lava extends all {
     constructor(x, y, index) {
        super(x, y, index);
        this.c = 4;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

        if(weather == 'dzmer') {
            this.c = 10;
        }
        else if(weather == 'amar'){
            this.c = 3;
        }
        else if(weather == 'ashun'){
            this.c = 5;
        }
        else if(weather == 'garun'){
            this.c = 5;
        }

        if (newCell && this.multiply >= this.c) {
            lavabaz++;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 8;

            var newlava = new Lava(newX, newY, this.index);
            lavaArr.push(newlava);
            this.multiply = 0;
        }
    }


}