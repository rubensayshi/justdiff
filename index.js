require('colors');
jsdiff = require('diff');

module.exports = function(str1, str2, options) {
  return jsdiff
    .diffChars(str1, str2, options)
    .map(function(part) {
      var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
      return part.value[color];
    })
    .join("")
};

