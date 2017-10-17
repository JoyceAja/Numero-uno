// write a file
// var fs = require('fs');

// fs.writeFile('/tmp/fs.tmp', 'ABC', function(err) {
//   if (err) throw err;
// });

// apendfile.js
//when you adding unto a file
// var fs = require('fs');

// fs.appendFile('/tmp/fs.tmp', 'appended', function(err) {
//   if (err) throw err;
// });

// // Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
// fs.readFile('dirlist.txt', function (err, logData) {

//   // If an error occurred, throwing it will
//   // display the exception and end our app.
//   if (err) throw err;

//   // logData is a Buffer, convert to string.
//   var fs = require('fs');
  
  fs.readFile('dirlist.txt', function (err, file) {
    if (err) throw err;
    var text = file.toString();
  
    var array = text.split('\n');
    for (var index = 0; index < array.length; index++) {
      var row = array[index];
  
      var columns = row.split(/ +/);
      var filename = columns[8];
  
      if (filename === undefined) {
        continue;
      }
      console.log(filename);    
    }
  });