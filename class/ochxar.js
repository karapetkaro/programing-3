var all = require("./yndanur.js");
module.exports = class oxar extends all {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.c = 6;

    }

    tarmacnel() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    die() {
        for (var i in ochxarArr) {
            if (this.x == ochxarArr[i].x && this.y == ochxarArr[i].y) {
                ochxarArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }




    move() {


        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    mul() {

        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            ochxarbaz++;
            this.energy = 6;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newochxar = new oxar(newX, newY, this.index);
            ochxarArr.push(newochxar);


        }




    }

    utel() {
        var emptyCells = this.chooseCell(1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (weather == 'dzmer') {
                this.c = 6;
            }
            else if (weather == 'amar') {
                this.c = 10;
            }
            else if (weather == 'ashun') {
                this.c = 4;
            }
            else if (weather == 'garun') {
                this.c = 8;
            }



            if (this.energy >= 12) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }


    chooseCell(character) {
        this.tarmacnel();
        return super.chooseCell(character);
    }

}