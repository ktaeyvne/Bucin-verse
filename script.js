let music = document.getElementById("music");
let slides = document.querySelectorAll(".slide");
let index = 0;

// START
function start() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  music.play().catch(() => {});
  autoSlide();
}

// SLIDER AUTO
function autoSlide() {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}

// LOVE EFFECT
function love() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";

    document.body.appendChild(heart);

    let fall = setInterval(() => {
      heart.style.top = parseFloat(heart.style.top) - 2 + "px";
      if (parseFloat(heart.style.top) < 0) {
        heart.remove();
        clearInterval(fall);
      }
    }, 20);
  }
}
