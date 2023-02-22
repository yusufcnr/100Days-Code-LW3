//jshint esversion:6
function checkCashRegister(price, cash, cid) {
  const currencies = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ];
  
  let changeNeeded = (cash - price) * 100; // convert to cents
  let changeAvailable = 0;
  cid.forEach(item => changeAvailable += item[1] * 100); // convert to cents
  
  if (changeNeeded > changeAvailable) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (changeNeeded === changeAvailable) {
    return {status: "CLOSED", change: cid};
  } else {
    let change = [];
    for (let i = currencies.length - 1; i >= 0; i--) {
      let currencyName = currencies[i][0];
      let currencyValue = currencies[i][1];
      let currencyAvailable = cid[i][1] * 100; // convert to cents
      
      if (changeNeeded >= currencyValue && currencyAvailable > 0) {
        let numNeeded = Math.floor(changeNeeded / currencyValue);
        let numAvailable = Math.floor(currencyAvailable / currencyValue);
        let numToReturn = Math.min(numNeeded, numAvailable);
        let amountToReturn = numToReturn * currencyValue;
        
        change.push([currencyName, amountToReturn / 100]); // convert back to dollars
        
        changeNeeded -= amountToReturn;
      }
    }
    
    if (changeNeeded > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: change};
    }
  }
}
