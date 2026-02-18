const exercicios = [
    {
        id: 1,
        titulo: "Fortalecimento de Língua",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo de link
        instrucao: "Empurre a bochecha com a língua por dentro, 5 segundos de cada lado.",
        categoria: "Motricidade"
    },
    {
        id: 2,
        titulo: "Sopro Direcionado",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        instrucao: "Tente soprar um canudo em um copo com água fazendo bolhas constantes.",
        categoria: "Respiração/Fala"
    }
];

function renderApp() {
    const container = document.getElementById('app-container');
    container.innerHTML = exercicios.map(ex => `
        <div class="card">
            <h3>${ex.titulo}</h3>
            <div class="video-wrapper">
                <iframe src="${ex.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p>${ex.instrucao}</p>
            <button onclick="completar(${ex.id})" id="btn-${ex.id}">Marcar como Feito</button>
        </div>
    `).join('');
}

let concluidos = 0;
function completar(id) {
    const btn = document.getElementById(`btn-${id}`);
    btn.innerText = "✓ Concluído";
    btn.style.backgroundColor = "#27ae60";
    btn.disabled = true;
    
    concluidos++;
    const porc = (concluidos / exercicios.length) * 100;
    document.getElementById('progress-fill').style.width = porc + "%";
}

renderApp();