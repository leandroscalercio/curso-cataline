class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelarar() {
    console.log("acelerou");
  }
}

// Utilizamos a palavara reservada extends para estender metodos de uma outra classe, podendo assim, utlizar.
class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas); // Herdo aqui o construtor da classe veiculo.
    this.capacete = capacete;
  }

  taUsandoCapacete() {
    console.log(this.capacete);
  }
  empinar() {
    console.log(`Empinou com ${this.rodas} rodas`);
  }
  acelarar() {
    super.acelarar(); // utilizamos a palavra reservada super para fazer referencia ao metodo da classe pai extendida (VEICULO), pode assim, utilizar tanto a classe acelerar do metodo moto, quando a do metodo pai
    console.log("Acelerou Muito!");
  }
}

const bross = new Moto(2, false); // como herdamos o construtor rodas da classe Veiculom devemos passar os parametros das 2 classes.
bross.acelarar();
bross.empinar();
bross.taUsandoCapacete();
