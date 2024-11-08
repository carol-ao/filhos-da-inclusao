
const sobre= document.getElementById("sobre")
const missao= document.getElementById("missao")
const parceiros= document.getElementById("parceiros")
const contato= document.getElementById("contato")
const contatoForm = document.getElementById("contatoForm")


contatoForm.addEventListener("submit", function(event) {
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

const wrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
let scrollPosition = 0;

// Calcula a largura total do carrossel com todas as imagens
const totalWidth = Array.from(slides).reduce((acc, slide) => acc + slide.offsetWidth, 0);

// Função para rolar o carrossel automaticamente
function scrollCarousel() {
    scrollPosition += 1; // Ajuste para aumentar a velocidade de rolagem

    if (scrollPosition >= totalWidth - wrapper.parentElement.offsetWidth) {
        scrollPosition = 0; // Reinicia quando atinge o final
    }

    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
}

// Intervalo de rolagem automático
setInterval(scrollCarousel, 20); // Ajuste para controlar a velocidade