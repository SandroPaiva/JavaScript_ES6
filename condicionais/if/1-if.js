// estrutura coindicional 
const array = [0,1,2,3,4,5];
const par = [];
const impar = [];

array.forEach(item => {
    if(item % 2 === 0){
        console.log('O número '+ item + ' é par.')
        par.push(item);
    }else {
        console.log('O número '+ item + ' é impar.')
        impar.push(item);
    }
});

console.log(par);
console.log(impar);