var todos = [
  { text: "lavar louça", done: false },
  { text: "passear com os dogs", done: true },
  { text: "brincar com a tice", done: true },
];
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos); // imprime um array com 2 posições que a condição .done seja true

// Filter sempre retorna um Array

// ============================== find ==============================  \\
// Retorna um unico objeto

const find = todos.find((todo) => {
  return todo.text === "brincar com a tice";
});
console.log(find);

// ============================== findIndex ==============================  \\
// Retorna o index do elemento que possui o valor dentro da key text do objeto
const index = todos.findIndex((todo) => {
  return todo.text === "lavar louça";
});
console.log(index); // 0
