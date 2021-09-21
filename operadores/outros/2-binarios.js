//clase de pesquisa, o 'in' procura algo que está entre alguns itens => something in somethingItens

//Uso em Array
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
console.log(0 in arvores); //retorna true
console.log(3 in arvores); //retorna true
console.log(6 in arvores); //retorna false
console.log("cedro" in arvores); //retorna false (deve ser procurado o numero do indice não seu valor)
console.log("length" in arvores); //retorna true (length é uma propriedade de um array)

//objetos predefinidos
console.log("PI" in Math); //retorna true

var minhaString = new String("coral");
console.log("length" in minhaString); //retorna true

//Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
console.log("marca" in meucarro);// retorna true
console.log("modelo" in meucarro);// retorna true

//instaeof: verifica se o objeto é instancia de alguma coisa

var dia = new Date(2021, 09, 20);

if (dia instanceof Date){
    console.log("Teste 1 2 3 ")
}