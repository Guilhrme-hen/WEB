function mostrarOrcamento() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var orcamento = "Orçamento para: " + nome + "\n email: " + email + "\n\n";

    var produtos = document.querySelectorAll('.produto');
    var total = 0;

    for (var i = 0; i < produtos.length; i++) {
        var quantidadeInput = produtos[i].querySelector('.quantidade');
        var quantidade = parseInt(quantidadeInput.value);

        if (quantidade > 0) {
            var produto = produtos[i].querySelector('h3').innerHTML;
            var valor = parseFloat(produtos[i].getAttribute('Valor-produtos'));
            var subtotal = quantidade * valor;

            orcamento += produto + ": " + quantidade + " unidades - R$ " + subtotal.toFixed(2) + "\n";
            total += subtotal;
        }
    }

    orcamento += "\nTotal: R$ " + total.toFixed(2);

    alert(orcamento);
}

function calcularTotal() {
    var produtos = document.querySelectorAll('.produto');
    var total = 0;

    for (var i = 0; i < produtos.length; i++) {
        var quantidadeInput = produtos[i].querySelector('.quantidade');
        var quantidade = parseInt(quantidadeInput.value);
        var valor = parseFloat(produtos[i].getAttribute('Valor-produtos'));

        total += quantidade * valor;
    }

    document.getElementById('total').innerHTML = "Total: R$ " + total.toFixed(2);
}
