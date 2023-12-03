<?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados (substitua com suas credenciais)
    $conexao = new mysqli("localhost", "root", "", "devsoft_test");

    // Verificar a conexão
    if ($conexao->connect_error) {
        die("Falha na conexão: " . $conexao->connect_error);
    }

    // Obter dados do formulário
    $nome_produto = $_POST['produto']; // Correção aqui

    // Inserir no banco de dados
    $sql = "INSERT INTO produtos (produto) VALUES ('$nome_produto')";

    if ($conexao->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Erro ao cadastrar produto: " . $conexao->error;
    }

    // Fechar a conexão
    $conexao->close();
}
?>
