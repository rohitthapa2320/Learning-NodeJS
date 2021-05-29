const fork = require('child_process').fork;
const path= require('path');

const program= path.resolve('child.js');

const child = fork(program);