var all = require("./yndanur.js");
module.exports = class qameljon extends all {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;
        this.caneat = true;
        this.c = 4;

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
    cheke() {
        if (this.chooseCell(3).length != 0) {
            matrix[this.y][this.x] = 7;
            this.caneat = false;
        }
        else {
            matrix[this.y][this.x] = 5;
            this.caneat = true;
        }
    }

    eat() {
        this.cheke();
        if (this.caneat) {
            var emptyCells = this.chooseCell(1);
            var index = Math.floor(Math.random() * emptyCells.length);
            var newCell = emptyCells[index];
            if (newCell) {
                this.energy++;
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 5;
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
                    this.c = 4;
                }
                else if (weather == 'amar') {
                    this.c = 13;
                }
                else if (weather == 'ashun') {
                    this.c = 8;
                }
                else if (weather == 'garun') {
                    this.c = 8;
                }


                if (this.energy >= 20) {
                    this.mul();
                }
            }
            else {
                this.move();
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
            matrix[newY][newX] = 5;

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
            qamelionbaz++;
            this.energy = 12;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            var newqameljon = new qameljon(newX, newY, this.index);
            qameljonArr.push(newqameljon);

        }


    }
    die() {
        for (var i in qameljonArr) {
            if (this.x == qameljonArr[i].x && this.y == qameljonArr[i].y) {
                qameljonArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }

    chooseCell(character) {
        this.tarmacnel();
        return super.chooseCell(character);

    }
}