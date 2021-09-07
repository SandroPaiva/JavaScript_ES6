const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: "Jennifer",
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    },
];

function getAprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);

}

console.log('Alunos aprovados: ');
console.log(getAprovedStudents(students));

console.log('\nLista de Alunos: ');
console.log(students);