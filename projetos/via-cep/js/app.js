let btnSubmit = document.querySelector("div#app form .btnSubmit");
let zipCodeField = document.querySelector("div#app form input");
let content = document.querySelector("#app main");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); // previne a ação original do botão

  let zipCode = zipCodeField.value; // captura apenas o que foi digitado no input, no caso a propriedade value dele
  zipCode = zipCode.replace(" ", ""); // Faz a tratativa onde, se o usuario digitar espaço entre uma palavara e outra , esse espaço é  removido
  zipCode = zipCode.replace(".", ""); // Faz a tratativa onde, se o usuario digitar '.'  , esse '.' é removido, juntando assim as string
  zipCode = zipCode.trim(); // Faz a tratativa onde, é removido qualquer espaço digitado no inicio e no final do valor
  console.log(zipCode);

  axios
    .get("https://viacep.com.br/ws/" + zipCode + "/json/")
    .then((response) => {
      if (response.data.erro) {
        throw new Error("CEP INVALIDO!");
      }
      content.innerHTML = "";
      createLine(response.data.logradouro);
      createLine(response.data.localidade + "/" + response.data.uf);
      createLine(response.data.bairro);
    })
    .catch(() => {
      content.innerHTML = "";
      createLine("Ops, algo deu errado");
    });
});

function createLine(text) {
  var line = document.createElement("p");
  var text = document.createTextNode(text);
  line.appendChild(text);
  content.appendChild(line);
}
