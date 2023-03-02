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
  let changeNeeded = (cash - price) * 100; // as cents
  let changeAvailable = 0;

  cid.forEach(item => changeAvailable += item[1] * 100); 
  console.log(changeAvailable);
  console.log(changeNeeded);

if (changeNeeded > changeAvailable) { 
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } 
  else if(changeAvailable === changeNeeded) {
    return {status : "CLOSED", change: cid};
  }


if (changeNeeded >= currencyValue && currencyAvailable > 0 ) {
        let numberNeeded = Math.floor(changeNeeded / currencyValue);
        let numAvailable = Math.floor(currencyAvailable / currencyValue);
        let numToReturn = Math.min(numberNeeded, numAvailable);
        let amountToReturn = numToReturn * currencyValue;
        change.push([currencyName, amountToReturn / 100 ]);
        changeNeeded -= amountToReturn;
      }
    }
    if (changeNeeded > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: []};
    }
    else {
      return {status: "OPEN", change: change};
    
  }



