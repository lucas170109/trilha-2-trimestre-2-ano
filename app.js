document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.insertBefore(container, document.body.firstChild);

    // Criar cartões para cada pergunta
    perguntas.forEach(pergunta => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h2>${pergunta.categoria}</h2>
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="card-back">
                    <p>${pergunta.resposta}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Adicionar título ao projeto
    const header = document.createElement('h1');
    header.textContent = 'Flashcards de Programação';
    header.style.color = '#4dffb4';
    header.style.marginBottom = '30px';
    header.style.textAlign = 'center';
    document.body.insertBefore(header, container);

    // Adicionar instruções
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Passe o mouse sobre os cartões para ver as respostas';
    subtitle.style.color = '#aaaaaa';
    subtitle.style.marginBottom = '40px';
    subtitle.style.textAlign = 'center';
    document.body.insertBefore(subtitle, container);
});
