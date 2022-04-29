// ============================== Desestruturação ==============================  \\

//Arrays
const despensa = ["laranja", "biscoito", "macarrao", "leite"];
const [a, b, c, d] = despensa; // declara a const com [] = nomeDoArray

console.log(a, b); // Imprime laranja e Biscoito
console.log(a, b, c); // Imprime laranja,Biscoito e macarrao
console.log(a, c); // Imprime laranja e macarrao

//Objetos
const personDestruturacao = {
  firstName: "Leandro",
  lastName: "Scalercio Moreira",
  age: 33,
  adress: {
    city: "Brasília",
    region: "DF",
  },
};

const {
  firstName,
  lastName,
  adress: { city },
} = personDestruturacao;

console.log(firstName, lastName, city);

console.log(personDestruturacao);

// Funcoes
const showFullName = ({ firstName, lastName }) => {
  // faz a desestruturação do valor que quero do objeto, diramente nos paramentos da função
  console.log(`${firstName} ${lastName}`);
};

showFullName(personDestruturacao);
