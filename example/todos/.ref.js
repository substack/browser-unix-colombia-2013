var createUnix = require('browser-unix');
var unix = createUnix();
unix.appendTo('#terminals');
unix.listenTo(window);
