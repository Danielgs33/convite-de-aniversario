

document.addEventListener('DOMContentLoaded', function () {
    // Define a data de término da contagem regressiva (2 dias e 6 horas no futuro)
    const dataTermino = new Date();
    dataTermino.setDate(dataTermino.getDate() + 16); // Adiciona 2 dias
    dataTermino.setHours(dataTermino.getHours() + 19); // Adiciona 6 horas

    // Atualiza o contador a cada segundo
    const intervalo = setInterval(function () {
        // Obtém a data e hora atuais
        const dataAtual = new Date().getTime();

        // Calcula a diferença entre a data de término e a data atual
        const diferenca = dataTermino - dataAtual;

        // Calcula os dias, horas, minutos e segundos restantes
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Exibe o contador no elemento com o id "contador"
        document.getElementById('contador').innerHTML = `${dias} Dias - ${horas}h:${minutos}m ${segundos}s`;

        // Se a contagem regressiva atingir zero, exibe uma mensagem e para o intervalo
        if (diferenca <= 0) {
            clearInterval(intervalo);
            document.getElementById('contador').innerHTML = 'Contagem regressiva encerrada! Hora de ir a festa!';
        }
    }, 1000);
});
