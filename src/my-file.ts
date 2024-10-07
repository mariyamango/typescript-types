//Each student should have a first name, last name, age, and a property "grades" that contains a list of grades.
//In this first step, a grade should be an integer from 1 to 6. Choose suitable English names for the attributes.
//Then create a student and output it in the console.

interface Student {
    firstName: string,
    lastName: string,
    age: number,
    grades: {
        "Sport": (number | String | undefined)[]
        "Art": (number | String | undefined)[]
        "Mathematics": (number | String | undefined)[]
    },
    output?: (s: Student) => void
}

let John: Student = {
    firstName: 'John',
    lastName: 'Johnson',
    age: 20,
    grades: {"Sport": [1, 5, 6, undefined, 8], "Art" : [2, undefined, 4, 3, "B" ], "Mathematics" : [2, undefined, "A", 3, 6, undefined]}
};

let Bob: Student = {
    firstName: 'Bob',
    lastName: 'Wilson',
    age: 21,
    grades: {"Sport": [undefined, 5, 6, 1 , 8], "Art" : [2, 6, 4, 3, "B" ], "Mathematics" : [2, undefined, "A", 3, 6, "A"]}
};

function output(s: Student) {
    console.log(s.firstName + ' ' + s.lastName + ' (' + s.age + ') ');
    console.log('='.repeat(s.firstName.length + 4 + s.lastName.length + s.age.toString().length));
    let sportGrades = s.grades.Sport.map(grade => grade === undefined ? '*' : grade);
    let artGrades = s.grades.Art.map(grade => grade === undefined ? '*' : grade);
    let mathGrades = s.grades.Mathematics.map(grade => grade === undefined ? '*' : grade);
    console.log("Grades: ");
    console.log(`Sport: ${sportGrades}`);
    console.log((`Art: ${artGrades}`));
    console.log((`Math: ${mathGrades}`));
}

output(John);
output(Bob);

let students: Student[] = [John, Bob];

students.forEach(student => {
    output(student);
    console.log()
});


// const avgGrade = (s: Student) => {
//     let sum: number =0;
//     let avgSportGrade : number = 0;
//     let sportGrade = s.grades.Sport.map(grade => {
//         grade ===( 1 | 2 | 3 | 4 | 5 | 6) ? sum += grade :
//             grade === "A" ? sum += 1 :
//                 grade ==="B" ? sum += 2 :
//                     grade === "C" ? sum += 3 :
//                         grade === "D" ? sum += 4 :
//                             grade === "E" ? sum += 5 :
//                                 grade === "F" ? sum += 6 :
//                                     sum;
//         avgSportGrade = sum/sportGrade.length});
// }





