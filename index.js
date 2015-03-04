
var promisify = require('thenify-all');
var findLib = require('find');

function nodeify(fn) {
    return function (pattern, root, callback) {
        fn.call(null, pattern, root, function (result) {
            callback(null, result);
        }).error(callback);
    }
}

var find = {};
var methods = Object.keys(findLib);
for (var i = 0; i < methods.length; i++) {
    find[i] = findLib[i];
}

find.file = nodeify(find.file);
find.dir = nodeify(find.dir);

promisify(find, exports, [
    'file',
    'dir'
]);
