const perguntas = [
    {
        categoria: "JavaScript",
        pergunta: "O que é JavaScript?",
        resposta: "JavaScript é uma linguagem de programação interpretada, usada principalmente para desenvolvimento web front-end."
    },
    {
        categoria: "HTML",
        pergunta: "Qual a função da tag <head> no HTML?",
        resposta: "A tag <head> contém metadados, links para arquivos CSS e JavaScript, e o título da página."
    },
    {
        categoria: "CSS",
        pergunta: "O que significa CSS?",
        resposta: "CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata), usado para estilizar elementos HTML."
    },
    {
        categoria: "JavaScript",
        pergunta: "Qual a diferença entre let, const e var?",
        resposta: "var tem escopo de função, let tem escopo de bloco e pode ser reatribuída, const tem escopo de bloco mas não pode ser reatribuída."
    },
    {
        categoria: "HTML",
        pergunta: "Para que serve o atributo alt em imagens?",
        resposta: "O atributo alt fornece texto alternativo para acessibilidade e quando a imagem não pode ser carregada."
    },
    {
        categoria: "CSS",
        pergunta: "Como centralizar um elemento horizontalmente com CSS?",
        resposta: "Usando margin: 0 auto; para elementos block ou display: flex; justify-content: center; no container."
    }
];

// Função para carregar perguntas (removido o export)
function carregarPerguntas() {
    return perguntas;
}
