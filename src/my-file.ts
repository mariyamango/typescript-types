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
    let sportGrades = s.grades.Sport;
    let numericSportGrades : number[] = [];
    for (let i = 0; i < sportGrades.length; i++){
         if (sportGrades[i] === "A" || sportGrades[i] === 1) {
            numericSportGrades.push(1);
        } else if (sportGrades[i] === "B" || sportGrades[i] === 2) {
            numericSportGrades.push(2);
        } else if (sportGrades[i] === "C" || sportGrades[i] === 3) {
            numericSportGrades.push(3);
        } else if (sportGrades[i] === "D" || sportGrades[i] === 4) {
            numericSportGrades.push(4);
        } else if (sportGrades[i] === "E" || sportGrades[i] === 5) {
            numericSportGrades.push(5);
        } else if (sportGrades[i] === "F" || sportGrades[i] === 6) {
            numericSportGrades.push(6);
        };
    }
    let lengthSport = numericSportGrades.length;
    let averageSport = (numericSportGrades.reduce((a,b) => a + b,0)) / lengthSport;
    let artGrades = s.grades.Art;
    let numericArtGrades : number[] = [];
    for (let i = 0; i < artGrades.length; i++){
        if (artGrades[i] === "A" || artGrades[i] === 1) {
            numericArtGrades.push(1);
        } else if (artGrades[i] === "B" || artGrades[i] === 2) {
            numericArtGrades.push(2);
        } else if (artGrades[i] === "C" || artGrades[i] === 3) {
            numericArtGrades.push(3);
        } else if (artGrades[i] === "D" || artGrades[i] === 4) {
            numericArtGrades.push(4);
        } else if (artGrades[i] === "E" || artGrades[i] === 5) {
            numericArtGrades.push(5);
        } else if (artGrades[i] === "F" || artGrades[i] === 6) {
            numericArtGrades.push(6);
        };
    }
    let lengthArt = numericArtGrades.length;
    let averageArt = (numericArtGrades.reduce((a,b) => a + b,0)) / lengthArt;
    let mathGrades = s.grades.Mathematics;
    let numericMathGrades : number[] = [];
    for (let i = 0; i < mathGrades.length; i++){
        if (mathGrades[i] === "A" || mathGrades[i] === 1) {
            numericMathGrades.push(1);
        } else if (mathGrades[i] === "B" || mathGrades[i] === 2) {
            numericMathGrades.push(2);
        } else if (mathGrades[i] === "C" || mathGrades[i] === 3) {
            numericMathGrades.push(3);
        } else if (mathGrades[i] === "D" || mathGrades[i] === 4) {
            numericMathGrades.push(4);
        } else if (mathGrades[i] === "E" || mathGrades[i] === 5) {
            numericMathGrades.push(5);
        } else if (mathGrades[i] === "F" || mathGrades[i] === 6) {
            numericMathGrades.push(6);
        };
    }
    let lengthMath = numericMathGrades.length;
    let averageMath = (numericMathGrades.reduce((a,b) => a + b,0)) / lengthMath;
    return (averageSport + averageMath + averageArt)/3;
}

console.log('The average grade for John is ' + averageGrade(John).toFixed(2));
console.log('The average grade for Bob is ' + averageGrade(Bob).toFixed(2));