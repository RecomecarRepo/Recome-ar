$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        mouseDrag: false,
        touchDrag: false,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            820: {
                items: 3
            },
            1350: {
                items: 4
            },
            1650: {
                items: 5
            }
        }
    });

});

let resumoCapituloSection = document.querySelector('.resumo-capitulos');
let resumoCapitulos = document.querySelectorAll('.resumo-capitulo-item');

resumoCapituloSection.style.opacity = "0";

function ToggleResumoCap(capitulo) {
    resumoCapituloSection.style.opacity = "1";
    resumoCapitulos.forEach(item => {
        if (item.classList.contains(`resumo-capitulo-${capitulo}`)) {
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0";
        }
    })
}

let faqItemDiv = document.querySelectorAll(".faq-item-div");

let faqIcon = document.querySelectorAll(".faq-icon");

function ToggleDivFAQ(numberDiv) {
    faqItemDiv.forEach((div, index) => {
        if (numberDiv == index) {

            div.classList.toggle("toggle-div-faq");

            faqIcon[index].classList.toggle("toggle-translate-icon");

        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let countdownTime = 60 * 74; // 1 hora e 14 minutos em segundos

    function startCountdown() {
        const timerElement = document.getElementById("timer");

        const intervalId = setInterval(() => {
            const hours = Math.floor(countdownTime / 3600);
            const minutes = Math.floor((countdownTime % 3600) / 60);
            const seconds = countdownTime % 60;

            // Formatar horas, minutos e segundos com dois dígitos
            const formattedHours = String(hours).padStart(2, "0");
            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");

            // Atualizar o elemento de exibição do temporizador
            timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

            // Reduzir o tempo regressivo
            countdownTime--;

            // Parar o temporizador quando o tempo chegar a zero
            if (countdownTime < 0) {
                clearInterval(intervalId);
                timerElement.textContent = "00:00:00";
            }
        }, 1000);
    }

    // Iniciar o temporizador regressivo ao carregar a página
    startCountdown();
});
