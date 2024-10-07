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
    grades: {"Sport": [1, 5, undefined, 6, 6], "Art" : [2, 4, 3, "B" ], "Mathematics" : [2, "A", 3, 6, undefined]}
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

// output(John);
// output(Bob);

let students: Student[] = [John, Bob];

students.forEach(student => {
    output(student);
    console.log()
});

function averageGrade (s : Student) :number {
    let numericSportGrades : number[] = toNumericArray(s.grades.Sport);
    let averageSport = (numericSportGrades.reduce((a,b) => a + b,0)) / numericSportGrades.length;
    let numericArtGrades : number[] = toNumericArray(s.grades.Art);
    let averageArt = (numericArtGrades.reduce((a,b) => a + b,0)) / numericArtGrades.length;
    let numericMathGrades : number[] = toNumericArray(s.grades.Mathematics);
    let averageMath = (numericMathGrades.reduce((a,b) => a + b,0)) / numericMathGrades.length;
    return (averageSport + averageMath + averageArt)/3;
}

function toNumericArray (array : (number | String | undefined) []) : number[] {
    let numericArray : number [] = [];
    for (let i = 0; i < array.length; i++){
        switch (array[i]) {
            case 'A':
            case 1:
                numericArray.push(1);
                break;
            case 'B':
            case 2:
                numericArray.push(2);
                break;
            case 'C':
            case 3:
                numericArray.push(3);
                break;
            case 'D':
            case 4:
                numericArray.push(4);
                break;
            case 'E':
            case 5:
                numericArray.push(5);
                break;
            case 'F':
            case 6:
                numericArray.push(6);
                break;
            default:
                break;
        }
    }
    return numericArray;
}

console.log('The average grade for John is ' + averageGrade(John).toFixed(2));
console.log('The average grade for Bob is ' + averageGrade(Bob).toFixed(2));