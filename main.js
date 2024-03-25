
document.addEventListener("DOMContentLoaded", function () {
    const slides2 = document.querySelectorAll(".documentos");
    let currentSlide2 = 0;

    function showSlide2(index) {
        slides2[currentSlide2].style.display = "none";
        slides2[index].style.display = "block";
        currentSlide2 = index;
    }

    function nextSlide2() {
        let nextIndex2 = (currentSlide2 + 1) % slides2.length;
        showSlide2(nextIndex2);
    }

    // Mostrar la primera diapositiva
    showSlide2(currentSlide2);

    // Cambiar automáticamente de diapositiva cada 3 segundos (3000ms)
    setInterval(nextSlide2, 3000);
});

const button1 = document.getElementById("#btn1");
const button2 = document.getElementById("#btn2");
const button3 = document.getElementById("#btn3");
const button4 = document.getElementById("#btn4");
const button5 = document.getElementById("#btn5");
const cajita1 = document.querySelector("#linea-cajita")
const cajita2 = document.querySelector("#linea-cajita2")
const cajita3 = document.querySelector("#linea-cajita3")
const cajita4 = document.querySelector("#linea-cajita4")
const cajita5 = document.querySelector("#linea-cajita5")



// Agrega un evento de clic al botón 1
button1.addEventListener("click", () => {
    // Cambia la opacidad de los botones 2 y 3
    button1.style.opacity = "1";
    cajita1.style.opacity = "1";
    cajita2.style.opacity = "0";
    cajita3.style.opacity = "0";
    cajita4.style.opacity = "0";
    cajita5.style.opacity = "0";
});

// Agrega un evento de clic al botón 2
button2.addEventListener("click", () => {
    // Cambia la opacidad de los botones 1 y 35
    button2.style.opacity = "1";
    cajita2.style.opacity = "1";
    cajita1.style.opacity = "0";
    cajita3.style.opacity = "0";
    cajita4.style.opacity = "0";
    cajita5.style.opacity = "0";
});

// Agrega un evento de clic al botón 3
button3.addEventListener("click", () => {
    // Cambia la opacidad de los botones 1 y 2
    button3.style.opacity = "1";
    cajita3.style.opacity = "1";
    cajita1.style.opacity = "0";
    cajita2.style.opacity = "0";
    cajita4.style.opacity = "0";
    cajita5.style.opacity = "0";
});
// Agrega un evento de clic al botón 4
button1.addEventListener("click", () => {
    // Cambia la opacidad de los botones 1, 2, 3 y 5
    button4.style.opacity = "1";
    cajita4.style.opacity = "1";
    cajita1.style.opacity = "0";
    cajita2.style.opacity = "0";
    cajita3.style.opacity = "0";
    cajita4.style.opacity = "0";
});
// Agrega un evento de clic al botón 5
button1.addEventListener("click", () => {
    // Cambia la opacidad de los botones 1, 2, 3 y 4
    button5.style.opacity = "1";
    cajita5.style.opacity = "1";
    cajita1.style.opacity = "0";
    cajita2.style.opacity = "0";
    cajita3.style.opacity = "0";
    cajita4.style.opacity = "0";
});