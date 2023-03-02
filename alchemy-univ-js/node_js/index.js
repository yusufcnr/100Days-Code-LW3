//jshint esversion:6

const myName = "Yusuf";
const lastName = "Cinar";
const message = `Hello ${process.argv[0]} ${process.argv[1]} welcome!`;
/*
process.argv[0]: /usr/local/bin/node (node module path)
process.argv[1]: /home/yusuf/Desktop/100Days-Code-LW3/alchemy-univ-js/node_js/index.js(script address)
process.argv[2]: Yusuf (firts variable)
process.argv[3]: second variable(undefined if not exists.)
*/
console.log(`Hello ${process.argv[0]} welcome!`);
console.log(`Hello ${process.argv[1]} welcome!`);
console.log(`Hello ${process.argv[2]} welcome!`);
console.log(`Hello ${process.argv[6]} welcome!`);

// run it from terminal as node index.js arg1 arg2 arg3 arg5 yusuf
