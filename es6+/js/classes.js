// As classes, tem quase o msm objeto das funções construtoras, porem podemos passar tambem metodos, coisa que na função construtora não fica semanticamente correto.

// Criamos a classe Car, criamos a função constutora para ela, onde como parametro sao passados a marca e o price, e em seguinda, criamos o metodo run, onde podemos executar qualquer ação dentro dele.
// Perceba, podemos passar um valor default no parametro, isso quer dizer, que se caso o objeto seja instanciado e nao seja passado valor algum como argumento, o valor informado será o do construtor!, como podemos ver na linha 19
class Car {
  constructor(brand, price = 0) {
    this.brand = brand;
    this.price = price;
  }
  run() {
    console.log("Correr");
  }
}

// Aqui criamos (instanciamos) um novo carro, onde serão passados os argumentos para criação.
// Uma vez instaciado a classe, o objeto instanciado Herda todos seus atributos e metodos como podemos ver na linha 17
const civic = new Car("Honda", 130);
civic.run();
const hb20 = new Car("Hyundai");
console.log(civic);
console.log(hb20);
