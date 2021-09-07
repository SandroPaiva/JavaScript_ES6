var test = 'exemplo';

(() =>{
    console.log('Valor dentor da função '+test);

    if(true){
        var test='exemplo';
        console.log('Valor dentro do IF '+ test);
    }
    console.log('Valor após execução do IF '+test);
})();