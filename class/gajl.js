var all = require("./yndanur.js");


module.exports = class gajl extends all {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;
        this.m = 5;


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
        for (var i in gajlArr) {
            if (this.x == gajlArr[i].x && this.y == gajlArr[i].y) {
                gajlArr.splice(i, 1);
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
            matrix[newY][newX] = 3;

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
            gajlbaz++;
            this.energy = 12;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            var newgajl = new gajl(newX, newY, this.index);
            console.log('bazmacav');
            gajlArr.push(newgajl);

        }
    }




    utel() {
        var emptyCells = this.chooseCell(2);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {

            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            for (var i in ochxarArr) {
                if (newX == ochxarArr[i].x && newY == ochxarArr[i].y) {
                    ochxarArr.splice(i, 1);
                    break;
                }
            }


            if (weather == 'dzmer') {
                this.m = 30;
            }
            else if (weather == 'amar') {
                this.m = 18;
            }
            else if (weather == 'ashun') {
                this.m = 20;
            }
            else if (weather == 'garun') {
                this.m = 15;
            }


            if (this.energy >= this.m) {
                console.log('in utel');

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