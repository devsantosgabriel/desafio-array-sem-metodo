//Faça um programa que tenha uma lista de produtos a qual deve conter para cada um: nome, quantidade e preco. Ao final sem usar os três métodos:
//Filter: retorne só os itens com quantidade zero, 
//Map: retorne um array com o preço total de cada item e
//Reduce: retorne o valor total 

//Para essa atividade você deverá usar a função construtora Array e o prototype da mesma para a inserção da função pertencente a cada método, no prototype da função construtora Array. Ao final chame cada função para exibir seus resultados.

const produtos = [
    {produto: 'Caneta', quantidade: 18, preco: 7.99},
    {produto: 'Impressora', quantidade: 0, preco: 649.50},
    {produto: 'Caderno', quantidade: 4, preco: 27.10},
    {produto: 'Lápis', quantidade: 3, preco: 5.82},
    {produto: 'Tesoura', quantidade: 1, preco: 19.20}
]

//filter
Array.prototype.partFilter = function () {
    let newArray = [];
    for (let dado of produtos) {
        if (dado.quantidade === 0) {
            newArray.push(dado)
        };
    };
    console.log(newArray);
};

Array.prototype.partFilter();

//reduce
Array.prototype.partReduce = function () {
    let soma = 0;
    for (let total of produtos) {
        soma += total.quantidade * total.preco
    };
    console.log(soma);
};

Array.prototype.partReduce();

//map
Array.prototype.partMap = function(){
    let novoArray = [];
    for (let total of produtos) {
        let resultado = total.quantidade * total.preco
        novoArray.push(resultado)
    };
    console.log(novoArray);
};

Array.prototype.partMap(); 