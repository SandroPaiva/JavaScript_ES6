const name = 'Sandro';

//É um arquivo chamado variáveis mas o exemplo é uma constante

//Uma constante não pode ser alterada, pois é uma constante

//nome = 'Sandro';

const user = {
    name: 'Sandro'
};

//Mas se for um objeto, podemos mudar suas propriedades

user.name = 'Outro Nome';

//Não podemos fazer o objeto 'apontar' para outro lugar

/*user = {
    nome: 'Sandro'
};*/

//em um array é a mesma coisa, não podemos faze-lo apontar para outro.

const persons = ['Sandro', 'Clau', 'Lorenzo'];

//Mas Podemos adicionar novos itens

persons.push('Ivy');

//podemos alterar diretamente

persons[2] = 'Vaodka';

console.log('\nArray após as alterações: ', persons)

