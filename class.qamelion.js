class qameljon {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.index = index;
        this.caneat = true;

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
            var newCell = random(emptyCells);
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
        var newCell = random(emptyCells);
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
        var newCell = random(emptyCells);
        if (newCell) {
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