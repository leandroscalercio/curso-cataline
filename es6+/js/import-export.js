import { sum } from "./calc"; // importa apenas a função sum .
import * as calculadora from "./calc"; // Pega todos as funções  que existem dentro de calc, e coloca dentro da variavel calculadora, fazendo assim, que ao chamar a variavel calculadora podemos acessar seus metodos, da mesma forma que acessamos um objeto

console.log(calculadora.sum(1, 2));

console.log(sum(1, 2));
