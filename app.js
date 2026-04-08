
function adicionarProduto(nome, preco) {
    const lista = document.getElementById('lista-produtos');
    
    const novoItem = document.createElement('li');
    novoItem.className = 'produto-card';

    const titulo = document.createElement('h3');
    titulo.textContent = nome;

    const precoTexto = document.createTextNode(` - R$ ${preco.toFixed(2)}`);

    novoItem.appendChild(titulo);
    novoItem.appendChild(precoTexto);

    lista.appendChild(novoItem);
}


$(document).ready(function() {
    $('#btn-detalhes').on('click', function() {
        $('#detalhes').toggle();
    });
    $('#btn-limpar').on('click', function() {
        $('#mensagem').text("");
    });

    adicionarProduto("Notebook Gamer", 4500.00);
    adicionarProduto("Mouse Sem Fio", 120.50);
});