
var promisify = require('promisify-lib'),
    find = require('find');

function nodeify(fn) {
    return function (pattern, root, callback) {
        fn.call(null, pattern, root, function (result) {
            callback(null, result);
        }).error(callback);
    }
}

find.file = nodeify(find.file);
find.dir = nodeify(find.dir);

promisify.all(find, exports, [
    'file',
    'dir'
]);
