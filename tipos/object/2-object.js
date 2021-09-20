const user = {
    name: 'Sandro',
    lastName: 'Neri de Paiva'
}

//Recupera as chaves do objeto
//console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
//console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
//console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Sandro Neri de Piva'});

console.log('\nAdiciona a propriedade fullNameno objeto user: ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user,{age: 26}));

//Previne todas as alterações em um objeto com o freeze
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes no objeto com seal
const person = {name: 'Sandro'};
Object.seal(person);

person.name = 'Sandro Neri de Paiva';
delete person.name;
person.age = 26;

console.log('\nVariavel person após as altrerações: ', person);