document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const containerCards = document.getElementById('cards-container');

    form.onsubmit = function(event) {
        event.preventDefault(); // Não deixa a página recarregar

        // 1. Pegar os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // 2. Criar o elemento HTML do "Card"
        const card = document.createElement('div');
        card.classList.add('cliente-card'); // Classe para o CSS

        card.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Tel:</strong> ${telefone || 'Não informado'}</p>
            <hr>
        `;

        // 3. Adicionar o card na tela (no topo da lista)
        containerCards.prepend(card);

        // 4. Limpar o formulário e dar feedback
        form.reset();
        alert("Cliente listado com sucesso!");
    };
});
