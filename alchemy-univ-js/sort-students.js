//jshint esversion:6

function sortStudents(students) {
    return students.sort(function (a,b) {
        return b.grade - a.grade;
    }).sort(function (g1, g2) {
        return g2.graduated - g1.graduated;
    });

    
}



module.exports = sortStudents;

const students = [
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
];


console.log(sortStudents(students));
