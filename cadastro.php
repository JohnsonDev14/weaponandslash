<?php
// Início do código PHP

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o formulário foi enviado usando o método POST

    $arquivo = "clientes.json";
    // Define o nome do arquivo onde os dados serão armazenados

    // Pega dados do formulário e cria um array com eles
    $novoCliente = [
        "nome" => $_POST["nome"], // Captura o nome enviado pelo formulário
        "email" => $_POST["email"], // Captura o email
        "senha" => password_hash($_POST["senha"], PASSWORD_DEFAULT), // Criptografa a senha
        "telefone" => $_POST["telefone"], // Captura o telefone
        "endereco" => $_POST["endereco"] // Captura o endereço
    ];

    // Verifica se o arquivo já existe
    if (file_exists($arquivo)) {
        // Lê o conteúdo do arquivo JSON
        // file_get_contents lê o arquivo
        // json_decode transforma JSON em array PHP
        $dados = json_decode(file_get_contents($arquivo), true);
    } else {
        // Se o arquivo não existir, cria um array vazio
        $dados = [];
    }

    // Adiciona o novo cliente ao array existente
    $dados[] = $novoCliente;

    // Converte o array para JSON novamente e salva no arquivo
    // JSON_PRETTY_PRINT deixa o JSON organizado (legível)
    file_put_contents($arquivo, json_encode($dados, JSON_PRETTY_PRINT));

    // Exibe mensagem de sucesso na tela
    echo "Cadastro salvo com sucesso!";
}
// Fim da verificação do método POST

?>
// Fim do código PHP