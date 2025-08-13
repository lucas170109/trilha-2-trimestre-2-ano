const perguntas = [
    {
        categoria: "JavaScript",
        pergunta: "O que é JavaScript?",
        opcoes: [
            "Uma linguagem de programação para desenvolvimento web",
            "Um framework para construção de aplicativos móveis",
            "Um banco de dados relacional",
            "Um sistema operacional"
        ],
        respostaCorreta: 0,
        explicacao: "JavaScript é uma linguagem de programação amplamente usada para desenvolvimento web, permitindo interatividade em páginas HTML."
    },
    {
        categoria: "HTML",
        pergunta: "Qual tag HTML é usada para criar um link?",
        opcoes: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        respostaCorreta: 1,
        explicacao: "A tag <a> (anchor) é usada para criar links em HTML, com o atributo href especificando o destino do link."
    },
    {
        categoria: "CSS",
        pergunta: "Qual propriedade CSS é usada para mudar a cor do texto?",
        opcoes: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        respostaCorreta: 2,
        explicacao: "A propriedade 'color' em CSS é usada para definir a cor do texto de um elemento."
    },
    {
        categoria: "JavaScript",
        pergunta: "Como declarar uma variável constante em JavaScript?",
        opcoes: [
            "var x = 5;",
            "let x = 5;",
            "const x = 5;",
            "variable x = 5;"
        ],
        respostaCorreta: 2,
        explicacao: "A palavra-chave 'const' é usada para declarar constantes em JavaScript, que não podem ser reatribuídas."
    },
    {
        categoria: "HTML",
        pergunta: "Qual elemento HTML é usado para exibir uma imagem?",
        opcoes: [
            "<picture>",
            "<img>",
            "<image>",
            "<photo>"
        ],
        respostaCorreta: 1,
        explicacao: "A tag <img> é usada para incorporar imagens em páginas HTML, com o atributo src especificando o caminho da imagem."
    },
    {
        categoria: "CSS",
        pergunta: "Como selecionar um elemento com id 'header' em CSS?",
        opcoes: [
            ".header",
            "#header",
            "*header",
            "header"
        ],
        respostaCorreta: 1,
        explicacao: "Em CSS, o seletor '#' é usado para selecionar elementos por seu id, então '#header' seleciona o elemento com id='header'."
    },
    {
        categoria: "JavaScript",
        pergunta: "Qual método converte JSON em um objeto JavaScript?",
        opcoes: [
            "JSON.encode()",
            "JSON.parse()",
            "JSON.toObject()",
            "JSON.decode()"
        ],
        respostaCorreta: 1,
        explicacao: "O método JSON.parse() converte uma string JSON em um objeto JavaScript."
    },
    {
        categoria: "Geral",
        pergunta: "O que significa a sigla CSS?",
        opcoes: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        respostaCorreta: 2,
        explicacao: "CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata), usado para estilizar páginas web."
    }
];

export default perguntas;
