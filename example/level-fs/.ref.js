var level = require('level');
var db = level('./test.db');
var fs = require('level-fs')(db);

fs.readFile('/counter.txt', function (err, src) {
    var n = parseInt(src || '0');
    console.log(n);
    fs.writeFile('/counter.txt', (n + 1).toString());
});
