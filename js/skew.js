const header = document.querySelector("section");
let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
const looper = function() {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel
    const speed = diff * 0.05;

    header.style.transform = "skewY(" + speed + "deg)"


    currentPixel = newPixel;

    requestAnimationFrame(looper)
}

looper();