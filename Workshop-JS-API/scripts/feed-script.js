//Primeiro:  Recuperar o nome do usuário na sessionStorage
let nome = sessionStorage.getItem("NomeDoUsuario");
let senha = sessionStorage.getItem("SenhaDoUsuario");
let magica = sessionStorage.getItem("MagicaDoUsuario");

// Segundo: Escrever o nome do usuário no local devido
//document.querySelector("headr b"): pega o perimeiro b
// busca e pega o elemento na classe
let localDoNome = document.querySelector(".avatar-content b");

//console.log(localDoNome);
localDoNome.innerHTML = "Olá," + nome;

// Terceiro : Carregar add publicações do servidor
//API in JSON, declarar a função como sicronização
async function carregarPublicacoes() {
  let resposta = await fetch("https://foodgram-back.herokuapp.com/posts");
  let fotos = await resposta.json();
  console.log(fotos);
}

carregarPublicacoes();

// Criar cards para  mostra imagens na pagina
