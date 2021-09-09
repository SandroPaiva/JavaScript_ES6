const myNumber = 12.0432;

//trsndformar numerop para string, ao usar o comando typeof será mostrado o tipo e não o conteúdo da constante
const numberAsToString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsToString);

//Retorna numero com um numero determinado de casas decimais 
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com Duas casas Decimais: ', fixedTwoDecimals);

//transforma uma parseada em float
console.log('\nString transformada em float: ', parseFloat('13.22'));

//transforma uma parseada em int
console.log('\nString transformada em int: ', parseInt('13.20'));