var numbers = [1, 2, 3, 4, 5];

// Acessando o Array numbers, invocamos o metodo forEach e passamos uma arrowfunction, onde passamos um parametro chamado number e como segundo parametro o valor de seu index, a funcao ira retornar todos os items do array e seus respectivos indexs;

numbers.forEach(function (number, index) {
  numbers[index] = number + 1; // modifica o valor original do array Numbers, com o valor [2, 4, 6, 8, 10];
});
console.log(numbers);

// ============================== map ==============================  \\
// map -> principio da imutabilidade pega o array numbers, faz uma mapeamento em seus elementos e coloca dentro da const newNumbers.

var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers); //  Cria um novo array, com o valor : [2, 4, 6, 8, 10];
