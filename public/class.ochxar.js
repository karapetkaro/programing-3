class oxar {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;

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
        var newCell = random(emptyCells);
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
        var newCell = random(emptyCells);
        if (newCell) {
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
        var newCell = random(emptyCells);
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

}