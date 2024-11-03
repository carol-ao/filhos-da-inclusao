document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Exibe mensagem de sucesso no envio (apenas como simulação)
    document.getElementById("statusMensagem").textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    document.getElementById("statusMensagem").style.color = "green";

    // Limpa o formulário
    document.getElementById("contatoForm").reset();
});
