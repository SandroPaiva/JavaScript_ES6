const users = ['Sandro', 'Clau', 'Lorenzo'];

const grender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Sandro',
        age: 43,
        grender: grender.MAN
    },
    {
        name: 'Clau',
        age: 50,
        grender: grender.WOMAN
    },
    {
        name: 'Lorenzo',
        age: 2,
        grender: grender.MAN
    }
];

//Retornar a quantidade de utens em um array
console.log('Itens: ', persons.length);

//Verificar se é array
persons.forEach((persons, index, arr) => {
    console.log('Nome: '+ persons.name);
});

//filtrar array
const mens=persons.filter(person => person.grender === grender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introduçao ao JavaScript';
    return person;
})

console.log('\nPessoas com a adição do course: ', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person)=>{
    age += person.age;
    return age;
}, 0);

console.log('\nSomade idade das pessoas ', totalAge);

//Juntando operações

const totalEvenAges = persons
.filter(person => person.age % 2 ===0)
.reduce((age, person)=> {
    age +=person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);