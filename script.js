const form = document.querySelector("form");

async function cadastrarUsuario(e) {
    e.preventDefault(); // impede reload

    const usuario = {
        username: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#senha").value,
        phone: document.querySelector("#telefone").value,
        address: document.querySelector("#endereco").value
    };

    try {
        const API_URL = "https://weapon-backend.onrender.com";

        const resposta = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const dados = await resposta.json();
        console.log(dados);

        alert(dados.msg || dados.erro);

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

form.addEventListener("submit", cadastrarUsuario);