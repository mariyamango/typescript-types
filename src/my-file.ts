//Each student should have a first name, last name, age, and a property "grades" that contains a list of grades.
//In this first step, a grade should be an integer from 1 to 6. Choose suitable English names for the attributes.
//Then create a student and output it in the console.

interface Student {
    firstName: string,
    lastName: string,
    age: number,
    grades: (number | string | undefined) [],
    output?: (s: Student) => void
}

let John : Student = {
    firstName: 'John',
    lastName: 'Johnson',
    age: 20,
    grades: [1,5,6,undefined,8]
};

let Bob : Student = {
    firstName: 'Bob',
    lastName: 'Wilson',
    age: 21,
    grades: [1,5,6,'A','B']
};

function output (s: Student) {
    console.log(s.firstName + ' ' + s.lastName + ' (' + s.age + ') ');
    console.log('='.repeat(30));
    let newGrades = s.grades.map(grade => grade===undefined ? '*':grade);
    console.log(`Grades: ${newGrades}`);
    };

output(John);
output(Bob);

let students: Student[] = [John, Bob];

students.forEach(student => {output(student);console.log()});