// 1 - task
var name = 'Bob';

function greet(){
console.log(`salom ${name}`);
}
greet();

// 2 - task

function calculateGrade(marks) {

    const totalMarks = marks.length;


    const totalSum = marks.reduce((sum, mark) => sum + mark, 0);


    const average = totalSum / totalMarks;


    if (average >= 90 && average <= 100) {
        return 'A';
    } else if (average >= 80 && average < 90) {
        return 'B';
    } else if (average >= 70 && average < 80) {
        return 'C';
    } else if (average >= 60 && average < 70) {
        return 'D';
    } else {
        return 'F';
    }
}

const marks = [80, 80, 50];
console.log(calculateGrade(marks)); // Natija: 'C'

// 3 - task


// uchinchi task yoq
