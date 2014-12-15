
var promisify = require('promisify-lib'),
    find = require('find');

promisify.all(find, exports, [
    'file',
    'dir'
]);
