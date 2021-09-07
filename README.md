# JavaScript_ES6
JavaScript ES6 essencial

# Introcução ao ES6

 ## Hisótia e conceitos

- Lançado em 1995 com nome de MOCA, foi chamado de Live Script e por fim de Java Scrip
- Java Script não é baseado em Java e foi criado por Brandan Eich

- EMCAScript é uma especificação padronozada pela EMCA262 da EMCA International, servindo como base para futuras implementações de outras linguagens de Script como Java Script, J Script e Action Script.
- TC39, é um comite reponsavel pela evolução do Java Script.

- ES2018
  - Ooperadores rest/spread
  - iteração assincrona
  - promosse.prototype.finaly()

- ES.Next, é uma especificação que possui futuras implementações.  Ela não fica disponível, mas se por curiosidade desejar testar, pode-se usar o Babel no endereço https://babeljs.io/
- Babel: Transpilado de Java Script que transforma uma determinada versão, por exemplo, SNEXT em uma antiga.

## Linguagem interpretada

- Executada pelo navegador assim que implementada

- Linguagem de tipagem fraca e dinâmica:
  - Não á uma verificação do tipo de váriáveis, o que define o tipo é o que é atribuida a ela no momento da declaração, podendo mudar seu tipo no decorrer da execução do script, essa não verificação permite rápida adequação de um oprerador, por exemplo **"+"**, que interpretará conforme o contexto.
    - EX com numeros:

      var num01 = 2;

      var num02 = 3;

      console.log(num01 + num02);

    - O resultado acima retorna a soma de 2+3  que é 5, por serem numeros nas váriaveis, e com essa atrubuição, assume-se que os tipos são inteiros ou numericos

    - EX com string e numero:

      var nome = "José";

      var num01 = 33;

      console.log(rnome + num01);

    - Diferente do exemplo anteior, o resultado não é uma soma, mas uma concatenação, que nada mais é que a união do conteúdo das duas váriaveis em uma unica strint, retornando **José33** e não um erro, ao contrario do que aconteceria se fosse em outras linguagens de tipagem forte, como Python, que motraria um erro de operação não suportada.

