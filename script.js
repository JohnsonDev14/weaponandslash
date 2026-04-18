// Seleciona o elemento <form> da página
const form = document.querySelector("form");

// Declara uma função assíncrona chamada cadastrarUsuario,
// que será executada quando o formulário for enviado
async function cadastrarUsuario(e) {

    // Impede o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Cria um objeto com os dados do usuário capturados dos inputs
    const usuario = {
        // Pega o valor do campo com id="nome"
        username: document.querySelector("#nome").value,

        // Pega o valor do campo com id="email"
        email: document.querySelector("#email").value,

        // Pega o valor do campo com id="senha"
        password: document.querySelector("#senha").value,

        // Pega o valor do campo com id="telefone"
        phone: document.querySelector("#telefone").value,

        // Pega o valor do campo com id="endereco"
        address: document.querySelector("#endereco").value
    };

    try {
        // Define a URL base da API
        const API_URL = "https://weapon-backend.onrender.com";

        // Faz uma requisição HTTP para o endpoint de cadastro de usuários
        const resposta = await fetch(`${API_URL}/users/register`, {

            // Define o método da requisição como POST (envio de dados)
            method: "POST",

            // Define o tipo de conteúdo como JSON
            headers: {
                "Content-Type": "application/json"
            },

            // Converte o objeto usuario para JSON e envia no corpo da requisição
            body: JSON.stringify(usuario)
        });

        // Converte a resposta da API para JSON
        const dados = await resposta.json();

        // Exibe os dados retornados no console (para debug)
        console.log(dados);

        // Mostra um alerta com a mensagem de sucesso ou erro retornada pela API
        alert(dados.msg || dados.erro);

    } catch (erro) {
        // Captura qualquer erro na requisição ou execução e exibe no console
        console.error("Erro:", erro);
    }
}

// Adiciona um "ouvinte" de evento ao formulário,
// que chama a função cadastrarUsuario quando ele for enviado
form.addEventListener("submit", cadastrarUsuario);