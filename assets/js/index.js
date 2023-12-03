
function salvar() {
    let product = document.getElementById("produto").value;
    let btn = document.getElementById("btn");

    if(product === "" || product === null){
        alert("Campo vázio, por favor preencha-o");
        return;
    }
    else if(product.length < 3){
        alert("O nome do produto deve ter pelo menos 3 caracteres");
        return;
    }  else {
        alert(" Produto cadastrado, lista em processamento...");
        return;
    }

}