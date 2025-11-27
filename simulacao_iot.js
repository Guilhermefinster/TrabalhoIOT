const totalDispositivos = 20;
const chanceFalha = 0.15; // 15% de chance de falha
const latenciaMin = 50;   // ms
const latenciaMax = 300;  // ms

// Função auxiliar para esperar um tempo (simula latência)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function rodarSimulacao() {
    console.log(`🚀 Iniciando simulação com ${totalDispositivos} dispositivos...\n`);
    
    let sucessos = 0;
    let falhas = 0;
    let tempoTotal = 0;

    const inicioGeral = performance.now();

    for (let i = 1; i <= totalDispositivos; i++) {
        // Simula tempo de envio (latência da rede)
        const latencia = Math.floor(Math.random() * (latenciaMax - latenciaMin + 1) + latenciaMin);
        
        // Simula processamento/envio
        await sleep(latencia);
        
        // Verifica sucesso ou falha
        const sucesso = Math.random() > chanceFalha;
        
        if (sucesso) {
            console.log(`[Dispositivo ${i}] ✔️  Envio realizado! (${latencia}ms)`);
            sucessos++;
            tempoTotal += latencia;
        } else {
            console.log(`[Dispositivo ${i}] ❌ Falha no envio!`);
            falhas++;
        }
    }

    const fimGeral = performance.now();
    
    // Cálculos finais
    const taxaPerda = (falhas / totalDispositivos) * 100;
    const tempoMedio = sucessos > 0 ? (tempoTotal / sucessos) / 1000 : 0; // em segundos

    console.log("\n===== MÉTRICAS =====");
    console.log(`⏱️  Tempo médio de envio (apenas sucessos): ${tempoMedio.toFixed(4)} s`);
    console.log(`📉 Taxa de perda: ${taxaPerda.toFixed(2)}%`);
    console.log(`💻 Impacto no sistema: (Tire o print do seu Gerenciador de Tarefas agora)`);
}

rodarSimulacao();