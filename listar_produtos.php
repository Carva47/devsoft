<?php
// Conectar ao banco de dados (substitua com suas credenciais)
$conexao = new mysqli("localhost", "root", "", "devsoft_test");

// Verificar a conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

// Consulta para obter todos os produtos
$sql = "SELECT * FROM produtos";
$result = $conexao->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/listProdutos.css">
    <title>Lista de Produtos</title>
</head>
<body>
    <h1>Lista de Produtos</h1>

    <?php
    if ($result->num_rows > 0) {
        echo "<section class='container'> ";
        echo "<div class='tabela'>";
        echo "<table>";
        echo "<tr><th>ID</th><th>Produto</th></tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['produto'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        echo "</div>";
        echo "</section>";
    } else {
        echo "Nenhum produto cadastrado.";
    }
    ?>

    <a href="index.html">Voltar ao Cadastro</a>
</body>
</html>

<?php
// Fechar a conexão
$conexao->close();
?>
