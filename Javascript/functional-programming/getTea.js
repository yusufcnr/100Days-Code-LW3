/*jshint esversion: 6*/

const prepareBlackTea = () => "Black Tea";
const prepareGreenTea = () => "Green Tea"; 


const teaCups = [];
const getTea = (prepareTea, numofCups) => {
    for (let cup=1; cup<=numofCups; cup++) {
        oneCup = prepareTea();
        teaCups.push(oneCup);
    } 
return teaCups;

};
console.log(getTea(prepareBlackTea, 10));