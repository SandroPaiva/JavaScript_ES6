const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são unicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

//Prevenenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Sandro',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Neri de Paiva'
}

console.log(user);

//Symbols criam propriedades que não saõ enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log('\nValor da chave ' + key +': '+ user[key]);
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('Sybbols resgistrados no objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP    :Symbol('UP'),
    DOWN  :Symbol('DOWN'),
    LEFT  :Symbol('LEFT'),
    RIGHT :Symbol('RIGHT')
};

console.log(directions);