const camposQtd = document.querySelectorAll('.qtd-esfiha');
    const labelTotal = document.getElementById('valorTotal');

    function calcularTotal() {
        let total = 0;
        camposQtd.forEach(input => {
            const preco = parseFloat(input.getAttribute('data-preco')) || 0;
            const qtd = parseInt(input.value) || 0;
            total += preco * qtd;
        });

        
        labelTotal.innerText = total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });
    }

   
    camposQtd.forEach(input => {
        input.addEventListener('input', calcularTotal);
    });

    
    const btnZap = document.getElementById('btnZap');

    btnZap.addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const tel = document.getElementById('tel').value;
        const pag = document.getElementById('pagamento').value;
        const totalFinal = labelTotal.innerText;

    
        if (!nome || !pag) {
            alert("Por favor, preencha seu nome e a forma de pagamento.");
            return;
        }

        let listaItens = "";
        camposQtd.forEach(input => {
            const qtd = parseInt(input.value) || 0;
            const nomeItem = input.getAttribute('data-nome');
            if (qtd > 0) {
                listaItens += `✅ ${qtd}x ${nomeItem}\n`;
            }
        });

        if (listaItens === "") {
            alert("Adicione pelo menos 1 esfiha ao seu pedido.");
            return;
        }

        const mensagem = `*NOVO PEDIDO - Papa Esfiha* 🍕\n\n` +
                         `*Nome:* ${nome}\n` +
                         `*Tel:* ${tel}\n` +
                         `--------------------------\n` +
                         `*ITENS:*\n${listaItens}\n` +
                         `--------------------------\n` +
                         `*Total:* ${totalFinal}\n` +
                         `*Pagamento:* ${pag}`;

        
        const contato = "5521997112413";
        const url =onclick="window.location.href='https://wa.me/5521997112413'";

        window.open(url, '_blank');
});
