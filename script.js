
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("mensagem").value;

    emailjs.send("service_d11fc08", "template_sd8s0tb", {
        name: name,
        email: email,
        message: message
    }).then(
        function(response) {
            console.log("Mensagem enviada com sucesso!", response.status, response.text);
        },
        function(error) {
            console.log("Erro ao enviar mensagem.", error);
        }
    );

    // Exibe mensagem de sucesso no envio (apenas como simulação)
    document.getElementById("statusMensagem").textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
    document.getElementById("statusMensagem").style.color = "green";

    // Limpa o formulário
    document.getElementById("contatoForm").reset();
});

let currentIndex = 0;

function showNextImage() {
    const carouselImages = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    currentIndex = (currentIndex + 1) % images.length;

    const offset = -currentIndex * images[0].width;
    carouselImages.style.transform = `translateX(${offset}px)`;
}

// Altere o tempo (em milissegundos) para a rotação automática
setInterval(showNextImage, 3000);

