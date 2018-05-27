var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

grass = require("./class/grass.js");
gajl = require("./class/gajl.js");
oxar = require("./class/ochxar.js");
qameljon = require("./class/qamelion.js");
mrgjun = require("./class/mrjun.js");
lava = require("./class/lava.js");



matrix = [];
n = 30;
m = 30;
count = 0;
grassArr = [];
ochxarArr = [];
gajlArr = [];
qameljonArr = [];
mrgjunArr = [];
lavaArr = [];
grassQanak = 250;
xotbaz = 0;
ochxarbaz = 0;
qamelionbaz = 0;
mrgjunbaz = 0;
lavabaz = 0;
gajlbaz = 0;
takt = 0;
ochxarQanak = 100;
gajlQanak = 50;
qameljonQanak = 30;
mrgjunQanak = 20;
lavaQanak = 2;



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
while (lavaQanak > 0) {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
        lavaQanak--;
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
        else if (matrix[y][x] == 8) {
            var lava = new oxar(x, y, 8);
            lava.push(lava);
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


var num = 0;
weather = 'garun';


var takter = 0;
obj = {
    'xotiqanak': [],
    'gajliqanak': [],
    'ochxariqanak': [],
    'qameljoniqanak': [],
    'mrjuniqanak': [],
    'lavaiqanak': []

}

function merDraw() {
    num++;
    takter++;

    if (num % 40 == 0) {
        weather = 'garun';
    }
    else if (num % 40 == 10) {
        weather = 'amar';
    }
    else if (num % 40 == 20) {
        weather = 'ashun';
    }
    else if (num % 40 == 30) {
        weather = 'dzmer';
    }


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
    for (var l in lavaArr) {
        lava[l].mul();

    }
    var myJSON = JSON.stringify(obj, null, ' ');

    if (takter % 2 == 0) {
        obj.xotiqanak.push(xotbaz);
        obj.gajliqanak.push(gajlbaz);
        obj.ochxariqanak.push(ochxarbaz);
        obj.qameljoniqanak.push(qamelionbaz);
        obj.lavaiqanak.push(lavabaz);
        obj.mrjuniqanak.push(mrgjunbaz);
        fs.writeFile("verj.json", myJSON);



    }


    io.sockets.emit('matrix', matrix);
    io.sockets.emit('exanak', weather);
}

setInterval(merDraw, 1000);


io.on("connection", function () {

});