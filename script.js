const perguntas = [
    {
        pergunta: "Qual é o lugar de origem dos porquinhos da india?",
        opcoes: ["América do Sul", "Europa", "Oceania", "África"],
        resposta: 0,
        imagem: "img/guineapig.gif"
    },
    {
        pergunta: "Qual é a classe animal dos porquinhos da india?",
        opcoes: ["Roedores", "Marsupiais", "Répteis", "Anfíbios"],
        resposta: 0,
        imagem: "img/guineapig01.jpg"
    },
    {
        pergunta: "Qual é a expectativa de vida média dos porquinhos da india?",
        opcoes: ["2-3 anos", "4-6 anos", "8-10 anos", "12-15 anos"],
        resposta: 1,
        imagem: "img/guineapig02.jpg"
    },
    {
        pergunta: "Qual é a dieta principal dos porquinhos da india?",
        opcoes: ["Carnívora", "Herbívora", "Onívora", "Insectívora"],
        resposta: 1,
        imagem: "img/guineapig03.jpg"
    },
    {
        pergunta: "Qual é o nome científico dos porquinhos da india?",
        opcoes: ["Cavia porcellus", "Mus musculus", "Rattus norvegicus", "Lepus europaeus"],
        resposta: 0,
        imagem: "img/guineapig04.jpg"
    },
    {
        pergunta: "Quantos dentes o porquinho da india possui?",
        opcoes: ["16", "20", "24", "28"],
        resposta: 1,
        imagem: "img/guineapig05.jpg"
    },
    {
        pergunta: "Qual filme é protagonizado por porquinhos da india?",
        opcoes: ["Ratatouille", "G-Force: Agentes Especiais", "Zootopia", "Madagascar"],
        resposta: 1,
        imagem: "img/guineapig06.jpg"
    },
    {
        pergunta: "O que é o 'popcorning' nos porquinhos-da-índia?",
        opcoes: ["Um tipo de doença", "Saltos de alegria", "Barulho de dor", "Forma de dormir"],
        resposta: 1,
        imagem: "img/guineapig07.jpg"
    },
    {
        pergunta: "Qual vitamina é essencial suplementar na dieta deles?",
        opcoes: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"],
        resposta: 2,
        imagem: "img/guineapig08.jpg"
    }
];

let indice = 0;
let pontos = 0;


const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const proximoBtn = document.getElementById("proximo");
const resultadoEl = document.getElementById("resultado");
const recomecarBtn = document.getElementById("recomecar");
const imagemEl = document.getElementById("imagem-pergunta");

function carregarPergunta() {
    const q = perguntas[indice];

    // Atualiza texto e imagem
    perguntaEl.textContent = q.pergunta;
    imagemEl.src = q.imagem;

    opcoesEl.innerHTML = "";

    q.opcoes.forEach((opcao, i) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.addEventListener("click", () => verificarResposta(i, botao));
        opcoesEl.appendChild(botao);
    });
}

function verificarResposta(i, botao) {
    const q = perguntas[indice];

    document.querySelectorAll("#opcoes button").forEach(b => b.disabled = true);

    if (i === q.resposta) {
        botao.classList.add("correta");
        pontos++;
    } else {
        botao.classList.add("errada");
       
        document.querySelectorAll("#opcoes button")[q.resposta].classList.add("correta");
    }

    proximoBtn.classList.remove("hidden");
}

proximoBtn.addEventListener("click", () => {
    indice++;

    if (indice < perguntas.length) {
        proximoBtn.classList.add("hidden");
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    perguntaEl.classList.add("hidden");
    opcoesEl.classList.add("hidden");
    proximoBtn.classList.add("hidden");
    imagemEl.classList.add("hidden");

    resultadoEl.classList.remove("hidden");
    recomecarBtn.classList.remove("hidden");

    let feedback = "";
    if (pontos === perguntas.length) feedback = "Perfeito! Você é um expert em porquinhos!";
    else if (pontos > perguntas.length / 2) feedback = "Muito bom! Você conhece bem esses fofos! 🥕";
    else feedback = "Bom esforço! Que tal estudar mais sobre eles? 📚";

    resultadoEl.innerHTML = `
        <div style="font-size: 1.2rem; margin-bottom: 10px;">${feedback}</div>
        <div>Você acertou ${pontos} de ${perguntas.length}! 🐹✨</div>
    `;
}

recomecarBtn.addEventListener("click", () => {
    indice = 0;
    pontos = 0;

    resultadoEl.classList.add("hidden");
    recomecarBtn.classList.add("hidden");
    perguntaEl.classList.remove("hidden");
    opcoesEl.classList.remove("hidden");
    imagemEl.classList.remove("hidden");

    carregarPergunta();
});


carregarPergunta();