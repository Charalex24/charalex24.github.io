document.addEventListener("mousemove", e => {
    const sparkle = document.createElement("div");

    sparkle.innerHTML = "🩷";
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
});

function createPetal() {
    const petal = document.createElement("div");

    petal.classList.add("sakura");
    petal.textContent = "🌸";

    petal.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 20 + 15;
    petal.style.fontSize = size + "px";

    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 500);