var express = require("express");
var app = express();

app.use(express.static("your_project_folder_name"));

app.get("/", function (req, res) {
    res.redirect("your_project_html_name");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var grass = require("./class/grass.js");
var gajl = require("./class/gajl.js");
var oxar = require("./class/ochxar.js");
var qameljon = require("./class/qamelion.js");
var mrgjun = require("./class/mrjun.js");



var matrix = [];
var n = 30;
var m = 30;
var count = 0;

var grassArr = [];
var ochxarArr = [];
var gajlArr = [];
var qameljonArr = [];
var mrgjunArr = [];
var grassQanak = 300;
var ochxarQanak = 100;
var gajlQanak = 50;
var qameljonQanak = 30;
var mrgjunQanak = 20;



for (var y = 0; y < n; ++y) {
    matrix[y] = [];
    for (var x = 0; x < m; ++x) {
        matrix[y][x] = 0;
    }
}

while (grassQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
        grassQanak--;
    }
}
while (ochxarQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        ochxarQanak--;
    }
}
while (gajlQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        gajlQanak--;
    }
}
while (qameljonQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        qameljonQanak--;
    }
}
while (mrgjunQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        mrgjunQanak--;
    }
}
console.log(matrix);



for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new grass(x, y, 1);
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

//draw





io.socket.on("connection", function () {
    setInterval(merDraw, 2000);

    function merDraw(){
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
        io.sockets.emit('matrix', matrix);
    }
});