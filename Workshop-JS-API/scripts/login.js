//alert("Funcionou!")

function login() {
  // Primeiro :captura a informação digitada pelo usuário

  // O  document.getElementById(inputNome) captura o id ou informação do input
  const input = document.getElementById("inputNome");
  const nome = input.value;

  const inputKey = document.getElementById("inputSenha");
  const senha = inputKey.value;

  const inputId = document.getElementById("inputSenha");
  const magica = inputId.value;

  // Segundo : Salvar a informação no navegador (sessionStorage)
  sessionStorage.setItem("NomeDoUsuario", nome);
  sessionStorage.setItem("SenhaDoUsuario", senha);
  sessionStorage.setItem("MagicaDoUsuario", magica);

  // Terceiro: Direcionar o visitante para a pagina feed.html
  window.location = "feed.html";
}

// Captura o  botão
let btnLogin = document.getElementById("btnLogin");

// associar ao click do botão a execução da função logar
btnLogin.onclick = login;
