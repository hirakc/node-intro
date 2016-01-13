var fs = require('fs');

console.log('Hello, This is an example of Eventloop and asynchronous execution');
fs.readFile('./intro.js', {encoding: 'utf8'}, function (err, fileContents) {
    console.log("When the contents are available \n Contents of Intro.js: \n---------------------\n", fileContents);
});
console.log('This should appear before we display file contents');
