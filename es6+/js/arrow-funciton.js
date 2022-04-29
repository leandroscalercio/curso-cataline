const arrowfunction = todos.filter((todo) => todo.done);
const retornoImplicito = () => "Retorno Implicito";
console.log(retornoImplicito());
console.log(arrowfunction); // retorna os objetos que possuem como true o valor de todo.

// ============================== Valores Padrões ==============================  \\
// Podemos passar um valor padrao na hora da construção da função, esse valor sera apresentado se na hora da invocação do metodo nao for passado nenhum argumento
function sayName(name = "Nome Padrão") {
  console.log("Olá: " + name);
}
sayName(); // Olá: Nome Padrão
sayName("Leandro Scalercio "); // Olá: Leandro Scalercio

// usando Arrow
const sayLastName = (sayLastName = "Scalercio Moreira") => sayLastName;
console.log(sayLastName("oi"));
