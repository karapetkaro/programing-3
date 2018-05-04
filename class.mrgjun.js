class mrgjun {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.caneat = true;

    }
    tarmacnel(n) {
        this.directions = [
            [this.x - n, this.y - n],
            [this.x, this.y - n],
            [this.x + n, this.y - n],
            [this.x - n, this.y],
            [this.x + n, this.y],
            [this.x - n, this.y + n],
            [this.x, this.y + n],
            [this.x + n, this.y + n]
        ];
    }
    chooseCell(character, n) {
        this.tarmacnel(n);
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
    mul() {
        var emptyCells = this.chooseCell(0, 1);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy = 12;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            var newmrgjun = new mrgjun(newX, newY, this.index);
            mrgjunArr.push(newmrgjun);

        }

    }
    die() {
        for (var i in mrgjunArr) {
            if (this.x == mrgjunArr[i].x && this.y == mrgjunArr[i].y) {
                mrgjunArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
    move() {
        var emptyCells = this.chooseCell(0, 1);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(7, 1);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            for (var i in qameljonArr) {
                if (newX == qameljonArr[i].x && newY == qameljonArr[i].y) {
                    qameljonArr.splice(i, 1);
                    break;
                }
            }
        }

        else {
            var emptyCells = this.chooseCell(7, 2);
            var newCell = random(emptyCells);
            if (newCell) {


                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                for (var i in qameljonArr) {
                    if (newX == qameljonArr[i].x && newY == qameljonArr[i].y) {
                        qameljonArr.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                var emptyCells = this.chooseCell(7, 3);
                var newCell = random(emptyCells);
                if (newCell) {

                    var newCell = random(emptyCells);
                    var newX = newCell[0];
                    var newY = newCell[1];
                    matrix[newY][newX] = 4;
                    matrix[this.y][this.x] = 0;

                    this.x = newX;
                    this.y = newY;

                    for (var i in qameljonArr) {
                        if (newX == qameljonArr[i].x && newY == qameljonArr[i].y) {
                            qameljonArr.splice(i, 1);
                            break;
                        }
                    }

                }

                else {
                    this.move();
                }
            }

        }
        if (this.energy >= 16) {
            this.mul();
        }
    }

}
