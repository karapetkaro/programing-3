var matrix = [
    [0, 0, 1, 0, 0,2,0,1,3],
    [1, 0, 5, 0, 0,0,0,0,1],
    [0, 1, 0, 0, 2,0,3,0,5],
    [0, 0, 1, 2, 0,1,1,0,1],
    [1, 1, 0, 0, 3,0,0,2,0],
    [1, 1, 2, 0, 0,0,1,0,1],
    [1, 1, 4, 0, 2,0,0,1,0],
    [1, 1, 3, 0, 0,0,1,0,0],
    [1, 1, 0, 0, 2,2,0,0,1]
    
    
];
var side = 20;
var grassArr = [];
var ochxarArr = [];
var gajlArr = [];
var qameljonArr = [];
var mrgjunArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ochxar = new oxar(x, y, 1);
                ochxarArr.push(ochxar);
            }
            else if (matrix[y][x] == 3) {
                var gl = new gajl(x, y, 2);
                gajlArr.push(gl);
            }
            else if (matrix[y][x] == 5) {
                var qam = new qameljon(x, y, 1);
                qameljonArr.push(qam);
            }
            else if (matrix[y][x] == 4) {
                var mrg = new mrgjun(x, y, 1);
                mrgjunArr.push(mrg);
            }



        }
    }

}





function draw() {

    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var j in ochxarArr) {
        ochxarArr[j].utel();

    }
    for (var k in gajlArr) {
        gajlArr[k].utel();

    }
    for (var i in qameljonArr) {
        qameljonArr[i].eat();


    }
    for (var j in mrgjunArr) {
        mrgjunArr[j].eat();

    }




    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }



        }
    }


}







