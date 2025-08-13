import perguntas from './perguntas.js';

// Elementos DOM
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');

// Variáveis de estado
let currentQuestionIndex = 0;
let score = 0;
let quizFinished = false;

// Inicializar o quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizFinished = false;
    updateScore();
    showQuestion();
}

// Mostrar a pergunta atual
function showQuestion() {
    if (currentQuestionIndex >= perguntas.length) {
        endQuiz();
        return;
    }

    const pergunta = perguntas[currentQuestionIndex];
    questionText.textContent = pergunta.pergunta;
    optionsContainer.innerHTML = '';

    // Criar opções de resposta
    pergunta.opcoes.forEach((opcao, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option-card');
        optionElement.textContent = opcao;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });

    // Resetar feedback e botão
    feedbackElement.className = 'feedback';
    feedbackElement.textContent = '';
    nextButton.classList.remove('show');
    
    // Atualizar barra de progresso
    const progress = ((currentQuestionIndex + 1) / perguntas.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Selecionar uma opção
function selectOption(e) {
    if (quizFinished) return;

    const selectedOptionIndex = parseInt(e.target.dataset.index);
    const pergunta = perguntas[currentQuestionIndex];
    const optionElements = document.querySelectorAll('.option-card');

    // Desabilitar todas as opções
    optionElements.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Marcar a resposta correta e a selecionada
    optionElements.forEach((option, index) => {
        if (index === pergunta.respostaCorreta) {
            option.classList.add('correct');
        } else if (index === selectedOptionIndex && index !== pergunta.respostaCorreta) {
            option.classList.add('wrong');
        }
    });

    // Verificar resposta e atualizar pontuação
    if (selectedOptionIndex === pergunta.respostaCorreta) {
        score++;
        updateScore();
        showFeedback('correct', `Correto! ${pergunta.explicacao}`);
    } else {
        showFeedback('wrong', `Incorreto. A resposta correta é: ${pergunta.opcoes[pergunta.respostaCorreta]}. ${pergunta.explicacao}`);
    }

    // Mostrar botão de próxima pergunta
    nextButton.classList.add('show');
}

// Mostrar feedback
function showFeedback(type, message) {
    feedbackElement.textContent = message;
    feedbackElement.classList.add(type, 'show');
}

// Próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < perguntas.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Atualizar pontuação
function updateScore() {
    scoreElement.textContent = score;
}

// Finalizar quiz
function endQuiz() {
    quizFinished = true;
    questionText.textContent = `Quiz Concluído! Sua pontuação final: ${score} de ${perguntas.length}`;
    optionsContainer.innerHTML = '';
    feedbackElement.className = 'feedback';
    feedbackElement.textContent = '';
    nextButton.classList.remove('show');
    
    // Criar botão de reiniciar
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar Quiz';
    restartButton.className = 'next-btn show';
    restartButton.addEventListener('click', initQuiz);
    optionsContainer.appendChild(restartButton);
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);

// Iniciar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);
Como usar este código:
