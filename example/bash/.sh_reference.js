var bashful = require('bashful');
var fs = require('fs');
var spawn = require('child_process').spawn;

var sh = bashful({
    read: fs.createReadStream,
    write: fs.createWriteStream,
    exists: fs.exists,
    spawn: spawn,
    env: process.env
});
sh.on('spawn', console.log);
process.stdin.pipe(sh.createStream()).pipe(process.stdout);
