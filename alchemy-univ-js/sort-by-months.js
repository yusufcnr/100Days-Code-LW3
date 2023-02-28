//jshint esversion:6
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];




function sortByMonth(events) {

    return events.sort(function (month1, month2) {
        let index1 = MONTHS.indexOf(month1);
        let index2 = MONTHS.indexOf(month2);

        return events.sort(function(m1,m2) {
            return m2.index2 - m1.index1;
        })

    } );

    
    
}

module.exports = sortByMonth;

const events = [{ event: 'parade', month: 'JAN' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }];

console.log(sortByMonth(events));