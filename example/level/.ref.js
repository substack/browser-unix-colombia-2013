var level = require('level');
var db = level('./test.db');

db.get('counter', function (err, value) {
    var n = parseInt(value || 0);
    console.log('n=' + n);
    db.put('counter', n + 1);
});
