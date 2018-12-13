const templateGenerator = require('./4-function');

var obj = {a:1,b:2};

const myTemplate = templateGenerator(obj);

console.log(myTemplate);
