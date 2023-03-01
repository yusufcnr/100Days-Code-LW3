//jshint esversion:6

function lessThanFive(array) {

    return array.filter(function (x) {
        return (x < 5);
    });
    
}

module.exports = lessThanFive;


function onlyTrue(array) {
    return array.filter(function(x) {
        return Boolean(x);
    } );
    
}

module.exports = onlyTrue;


function shortStrings(array) {
    
    return array.filter(function(x) {
        return (x.length <=3);
    });
}

module.exports = shortStrings;




function topStudents(array) {
    return array.filter(function(student) {
        return student.grade >=90;
    });
    
}

module.exports = topStudents;

function firstThree(array) {
    let filtered = [];
    return array.filter(function (element, index) {
        if(index <=2) {
            return filtered.push(array[index]);

        }

    });

}

module.exports = firstThree;

function unique(array) {
    
    return array.filter(function(str, index) {
        return array.indexOf(str) === i;


    });
    
}

module.exports = unique;




