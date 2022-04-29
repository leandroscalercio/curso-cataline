// let =  Podemos reatribuir um novo valor do seu valor inicial
// const = Uma vez declarada não é possivel alterar seu valor
{
  var carLET = "FUSCA";
  var carCONST = "BMW";
  console.log(carLET, carCONST); // As variaveis definidas com let e const só serão acessadas dentro desse escopo
} // console.log(carLET); // Não é possivel acessar a variavel const e let fora do escopo de definição
// Mutação de valores: Ao declarar um objeto ou Array com valores, é possivel acessar o seu valor e alterar, porem nao conseguimos alterar a estrutura.

var person = {
  name: "Leandro ",
};
person.name = "Leandro Scalercio Moreira";
console.log(person);
