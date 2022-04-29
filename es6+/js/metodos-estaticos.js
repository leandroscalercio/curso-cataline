// Declaramos  a classe, e declaramos a função sum, utilizamos a palavra reservada static, para informar que esse metodo é estatico, não sendo obrigatorio criar uma instancia para utilizar o metodo, ficando assim acessível!
class Calculator {
  static sum(a, b) {
    return a + b;
  }
}
console.log(Calculator.sum(13, 1));
