var all = require("./yndanur.js");
module.exports = class Grass extends all {

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
            this.c = 15;
        }
        else if(weather == 'amar'){
            this.c = 5;
        }
        else if(weather == 'ashun'){
            this.c = 10;
        }
        else if(weather == 'garun'){
            this.c = 7;
        }

        if (newCell && this.multiply >= this.c) {
            xotbaz++;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }



}




