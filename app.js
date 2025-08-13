// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    
    // Cria as cartas para cada pergunta
    perguntas.forEach(pergunta => {
        const card = document.createElement('article');
        card.className = 'cartao';
        
        card.innerHTML = `
            <div class="cartao__conteudo">
                <h3>${pergunta.categoria}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__resposta">
                    <p>${pergunta.resposta}</p>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Adiciona evento de clique para virar as cartas
    const cards = document.querySelectorAll('.cartao__conteudo');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
});
