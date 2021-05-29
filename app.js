const fork = require('child_process').fork;
const path= require('path');

const program= path.resolve('child.js');

console.log("Hi");

const child = fork(program, [], {
  silent: true
});

console.log("I am in parent");