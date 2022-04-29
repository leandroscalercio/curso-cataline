// ============================== rest ...==============================  \\
// utilizamos os ...nomeDavariavel para representar que sera armazenado o restante dos elementos que não foram desestruturados

//Array
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(numbers); // 1,2
console.log(rest); //3,4,5

//Objetos

const person = {
  name: "Leandro ",
  age: 33,
  height: 1.7,
  company: "Compass",
};

const { name, age, ...restObject } = person;

console.log(person); // imprime o objeto inteiro
console.log(restObject); // 1.7, Compass

//Exemplo de utilização

//Função para somar todos os numeros que são passados em seu parametro..

const sum = (...params) => {
  return params.reduce((total, next) => total + next);
};

console.log(sum(30, 10, 50));

// ============================== spread ==============================  \\
// Faz a unificação entre elementos

//Arrays
const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8, 9, 10];

const newNumbers = [...numbers1, ...numbers2];
console.log(newNumbers); // [1,2,3,4,5,6,7,8,9,10]

//Objetos

const dadosPessoais = {
  nome: "Leandro",
  idade: 33,
  profissao: "Desenvolvedor",
};
const dadosRestritos = {
  cpf: 12345,
  rg: 238596348,
  contaCorrente: 1254877,
  saldo: 8711,
  empresa: "CompassUOL",
};

const sobreEscrevendo = { ...dadosPessoais, empresa: "Compass" }; // traz os dados do objeto dadosPessoais, e sobreescreve o valor de empresa do objeto dadosRestritos

const dadosCompletos = { ...dadosPessoais, ...dadosRestritos }; // Faz a união dos todos os elementos em um unico objeto

console.log(sobreEscrevendo); // {nome: 'Leandro', idade: 33, profissao: 'Desenvolvedor', empresa: 'Compass'}
console.log(dadosCompletos);
