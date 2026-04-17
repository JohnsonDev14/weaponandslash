<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $arquivo = "clientes.json";

    // Pega dados
    $novoCliente = [
        "nome" => $_POST["nome"],
        "email" => $_POST["email"],
        "senha" => password_hash($_POST["senha"], PASSWORD_DEFAULT),
        "telefone" => $_POST["telefone"],
        "endereco" => $_POST["endereco"]
    ];

    // Se já existe arquivo, lê ele
    if (file_exists($arquivo)) {
        $dados = json_decode(file_get_contents($arquivo), true);
    } else {
        $dados = [];
    }

    // Adiciona novo cliente
    $dados[] = $novoCliente;

    // Salva de volta
    file_put_contents($arquivo, json_encode($dados, JSON_PRETTY_PRINT));

    echo "Cadastro salvo com sucesso!";
}
?>