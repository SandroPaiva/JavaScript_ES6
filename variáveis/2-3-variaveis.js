(() =>{
    const test = 'valor função';
    console.log('Valor dentro da função '+test);

    if(true){
        const test='exemplo';
        console.log('Valor dentro do IF '+ test);
    }
    console.log('Valor após execução do IF '+test);
})();