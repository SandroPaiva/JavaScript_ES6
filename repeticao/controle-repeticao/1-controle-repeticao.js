//break
console.log('Exemplo da utilização de break');

var index = 0;

while(true){ //esse true provoca um loop infinito
    index++
    if (index > 2){
       break; //mesmo sem nada na condição que faça o while parar, o break é colocado para que em determinada condição a parada da execução seja forçada;
    }
    console.log(index);
}

//continue
console.log('\nExemplo de ultilização do continue');
const array = [1,2,3,4,5,6];

for(let index = 0; index < array.length; index++){
    const elemento = array[index];

    if (elemento % 2 === 0){
        continue;
    }
    console.log(elemento);
}