/* =========================
   OPEN SURPRISE
========================= */

const openButton = document.getElementById("openButton");

const intro = document.getElementById("intro");

const mainContent = document.getElementById("mainContent");


openButton.addEventListener("click", function () {

    // Hide intro
    intro.style.opacity = "0";

    intro.style.transition = "opacity 0.8s ease";


    setTimeout(function () {

        intro.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Birthday confetti
        createConfetti(80);

    }, 800);

});


/* =========================
   SCROLL FUNCTION
========================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   DIAPER REVEAL
========================= */

const diaperButton =
    document.getElementById("diaperButton");

const diaperReveal =
    document.getElementById("diaperReveal");


diaperButton.addEventListener("click", function () {

    diaperReveal.classList.add("show");

    diaperButton.style.display = "none";

    diaperReveal.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createConfetti(60);

});


/* =========================
   ACCEPT FATE BUTTON
========================= */

const acceptButton =
    document.getElementById("acceptButton");


acceptButton.addEventListener("click", function () {

    createConfetti(150);

    acceptButton.innerHTML =
        "DESTINY ACCEPTED 😂👶🏽";

    acceptButton.style.background =
        "#681f3a";

    acceptButton.style.color =
        "white";

    setTimeout(function () {

        alert(
            "Congratulations 😂❤️ Your customized diapers are officially booked for the future."
        );

    }, 800);

});


/* =========================
   CONFETTI FUNCTION
========================= */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const shapes = [
        "❤️",
        "✨",
        "🎉",
        "💗",
        "⭐",
        "💕",
        "🎀"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add("confetti");


        confetti.innerHTML =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            Math.random() * 15 + 8 + "px";


        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        container.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}


/* =========================
   RANDOM HEART POP
========================= */

document.addEventListener(
    "click",
    function (event) {

        // Don't trigger on every button
        // because we already have confetti there.

        if (
            event.target.tagName === "BUTTON"
        ) {
            return;
        }


        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "9999";

        heart.style.fontSize = "20px";


        document.body.appendChild(heart);


        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",

                    opacity: 1
                },

                {
                    transform:
                        "translate(-50%, -150px) scale(1.5)",

                    opacity: 0
                }
            ],
            {
                duration: 900,

                easing: "ease-out"
            }
        );


        setTimeout(function () {

            heart.remove();

        }, 900);

    }
);


/* =========================
   WELCOME CONSOLE MESSAGE 😂
========================= */

console.log(
    "❤️ Made with love, chaos and frontend development."
);

console.log(
    "😂 If you're reading this, you're officially the bestie."
);
