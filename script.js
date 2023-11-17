window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    })
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const audio = new Audio();
audio.src = "assets/guitar.mp3";