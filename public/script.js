var n = 30;
var m = 30;
var side = 10;
col = 'acacac';
xotigujn = 'green';



function setup(matrix) {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('col');

    socket = io.connect('http://localhost:3000');
    socket.on("matrix", gcel);
    socket.on("exanak", function (weather) {
        if (weather == 'garun') {
            col = '##00b711'
            xotigujn = '#21df29';
        }
        else if (weather == 'amar') {
            col = '#de6111'
            xotigujn = '#215229';
        }
        else if (weather == 'ashun') {
            col = '#b64c11'
            xotigujn = '#b1fc10';
        }
        else if (weather == 'dzmer') {
            xotigujn = '#26e2fe';
            col = '#c0ecfe'
        }
    });
}





function gcel(matrix) {
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(xotigujn);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(col);
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
                fill("#00aa00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 8) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            
        }
    }
}


