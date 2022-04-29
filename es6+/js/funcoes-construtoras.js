// Ao criarmos uma função construtura, essa serve de molde para criação de quantos objetos quisermos.
// No exemplo abaixo, foi criado uma função construtora para criar carros, onde passamos como parametro a montadora(brand) e seu valor(price), referenciamos esses parametros dentro do corpo da função, para que seja vinculado ao valor passado.
// A palavra reservada 'this', faz referencia ao proprio escopo.
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}
// Nesse momento criamos as variaveis que irão receber uma instancia da função construtora, utilizamos a palavara 'new' e logo em seguida invocamos a função, e passamos os argumentos que serão injetados dentro desses objetos!
const civic = new Car("Honda", 130);
const hb20 = new Car("Hyundai", 80);

console.log(civic);
console.log(hb20);
