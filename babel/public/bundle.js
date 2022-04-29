"use strict";

// ============================== VARIAVEIS CONST & LET  ==============================  \\
// let =  Podemos reatribuir um novo valor do seu valor inicial
// const = Uma vez declarada não é possivel alterar seu valor
{
  var carLET = "FUSCA";
  var carCONST = "BMW";
  console.log(carLET, carCONST); // As variaveis definidas com let e const só serão acessadas dentro desse escopo
} // console.log(carLET); // Não é possivel acessar a variavel const e let fora do escopo de definição
// Mutação de valores: Ao declarar um objeto ou Array com valores, é possivel acessar o seu valor e alterar, porem nao conseguimos alterar a estrutura.

var person = {
  name: "Leandro "
};
person.name = "Leandro Scalercio Moreira";
console.log(person); // ============================== OPERAÇÕES COM ARRAY ==============================  \\
// ============================== ForEach==============================  \\

var numbers = [1, 2, 3, 4, 5]; // Acessando o Array numbers, invocamos o metodo forEach e passamos uma arrowfunction, onde passamos um parametro chamado number e como segundo parametro o valor de seu index, a funcao ira retornar todos os items do array e seus respectivos indexs;

numbers.forEach(function (number, index) {
  numbers[index] = number + 1; // modifica o valor original do array Numbers, com o valor [2, 4, 6, 8, 10];
});
console.log(numbers); // ============================== map ==============================  \\
// map -> principio da imutabilidade pega o array numbers, faz uma mapeamento em seus elementos e coloca dentro da const newNumbers.

var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers); //  Cria um novo arrau, com o valor : [2, 4, 6, 8, 10];
// ============================== reduce ==============================  \\
//total -> vem da iteração anterior , next -> é o proximo valor da iteracao

var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total); // ============================== filter ==============================  \\
// Filter sempre retorna um Array

var todos = [{
  text: "lavar louça",
  done: false
}, {
  text: "passear com os dogs",
  done: true
}, {
  text: "brincar com a tice",
  done: true
}];
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos); // ============================== find ==============================  \\
// Retorna um unico objeto

var find = todos.find(function (todo) {
  return todo.text === "brincar com a tice";
});
console.log(find); // ============================== find ==============================  \\
// Retorna o index do elemento que possui o valor dentro da key text do objeto

var index = todos.findIndex(function (todo) {
  return todo.text === "lavar louça";
});
console.log(index); // 0
// ============================== find ==============================  \\
// Percorrer o array, e retornar true or false

var cars = ["fusca", "civic", "hb20"];
var hasFusca = cars.some(function (car) {
  return car === "fusca";
});
console.log(hasFusca); //true, dentro da array cars, existe um elemento com nome de 'fusca'
// ============================== Arrow Function ==============================  \\

var arrowfunction = todos.filter(function (todo) {
  return todo.done;
});

var retornoImplicito = function retornoImplicito() {
  return "Retorno Implicito";
};

console.log(retornoImplicito());
console.log(arrowfunction); // retorna os objetos que possuem como true o valor de todo.
// ============================== Valores Padrões ==============================  \\
// Podemos passar um valor padrao na hora da construção da função, esse valor sera apresentado se na hora da invocação do metodo nao for passado nenhum argumento

function sayName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Nome Padrão";
  console.log("Olá: " + name);
}

sayName(); // Olá: Nome Padrão

sayName("Leandro Scalercio "); // Olá: Leandro Scalercio
// usando Arrow

var sayLastName = function sayLastName() {
  var sayLastName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Scalercio Moreira";
  return sayLastName;
};

console.log(sayLastName("oi")); // ============================== Template String ==============================  \\
// Meu nome é Leandro Scalercio Moreira, e eu amo minha filha Beatrice!

var fraseCompleta = function fraseCompleta(name, nameChild) {
  console.log(" Meu nome \xE9 ".concat(name, ", e eu amo minha filha ").concat(nameChild, "!"));
  console.log(" Meu nome \xE9 ".concat(name.toUpperCase(), ", e eu amo minha filha ").concat(nameChild, "!") // LEANDRO SCALERCIO
  );
};

fraseCompleta("Leandro Scalercio", "Beatrice"); // ============================== Object Short Syntax ==============================  \\

var product = "Camisa";
var price = 20;
var produts = {
  product: product,
  // passamos apenas a variavel, sem precisar atribuir ao nome novamente ex: product: prodruct
  price: price
};
console.log(produts); // ============================== Desestruturação ==============================  \\
//Arrays

var despensa = ["laranja", "biscoito", "macarrao", "leite"];
var a = despensa[0],
    b = despensa[1],
    c = despensa[2],
    d = despensa[3]; // declara a const com [] = nomeDoArray

console.log(a, b); // Imprime laranja e Biscoito

console.log(a, b, c); // Imprime laranja,Biscoito e macarrao

console.log(a, c); // Imprime laranja e macarrao
//Objetos

var personDestruturacao = {
  firstName: "Leandro",
  lastName: "Scalercio Moreira",
  age: 33,
  adress: {
    city: "Brasília",
    region: "DF"
  }
};
var firstName = personDestruturacao.firstName,
    lastName = personDestruturacao.lastName;
console.log(firstName, lastName);
console.log(personDestruturacao); // Funcoes

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName;
  console.log("".concat(firstName, " ").concat(lastName));
};

showFullName(personDestruturacao); // ============================== Desestruturação ==============================  \\
