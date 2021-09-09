//Retorna o tamanho de uma string
const textSize = 'Sandro'.length;
console.log('Quantidade de letras: '+ textSize)

//Retorna um array quebrando a string por um delimitador, ou seja, se na string exisitir vários textos delimitados por virgulas, será criado um Array com esses textos, as virgulas são removidas e cada conjunto de caracteres que estava antes da virgula, é isolado em uma posição do array
const splittedText = 'Sandro,Neri'.split(",");
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'SandroNeri'.replace('Neri', 'Paiva');
console.log('\nSubstiruição de Valor: ', replacedText);

//Retorna 'fatia' de um valor
const WithoutFirstChar = 'SandroNeri'.slice(1);
console.log('\nRemove a primeira letra da string: ', WithoutFirstChar);

const lastChar = 'SandroNeri'.slice(-1);
console.log('\nExibe a ultima letra da string: ', lastChar);


const allWithoutLastChar = 'SandroNeri'.slice(0, -1);
console.log('\nRemove a ultima letra da String: ', allWithoutLastChar);


//Retorna N caracteres a partir de uma posição

const twoCharsBeforeFirstPos = 'SandroNeri'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);


