//jshint esversion:6
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];


function sortByMonth(events) {
    return events.sort(function(a,b) {
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });
    
}

module.exports = sortByMonth;

const events = [{ event: 'parade', month: 'DEC' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }];

console.log(sortByMonth(events));