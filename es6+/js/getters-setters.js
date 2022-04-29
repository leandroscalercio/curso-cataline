// Declaremos  Classe
class Person {
  constructor(name) {
    this._name = name; // por convenção, utilizamos o "_" para indicar que a variavel é PRIVADA, sendo assim só podemos utilizar dentro da classe  .
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const person = new Person("Leandro Scalercio"); // criamos o objeto da classe Person, passando o nome inicial
person.name = "Leandro Scalercio Moreira"; // alteramos o nome original do instanciado

console.log(person.name);
