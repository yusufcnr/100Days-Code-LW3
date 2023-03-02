//jshint esversion:6
let names = [];

function addNameToList(name) {
    names.push(name);
}

const { faker } = require('@faker-js/faker');
const name = faker.name.firstName();
addNameToList(name);
const message = `Hello, ${name}!`; 
console.log(message);

console.log(names);
