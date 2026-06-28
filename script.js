// Elements
const loading = document.getElementById("loading");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");
const cake = document.getElementById("cakeSection");
const gift = document.getElementById("giftSection");
const message = document.getElementById("messageSection");
const finalPage = document.getElementById("finalSection");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const openGift = document.getElementById("openGift");
const typing = document.getElementById("typing");

// --------------------
// Sparkles Generator
// --------------------
function createSparkles() {
  const container = document.getElementById("sparkles");
  for (let i = 0; i < 40; i++) {
    const s = document.createElement("div");
    s.classList.add("sparkle");
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = Math.random() * 3 + "s";
    s.style.animationDuration = (2 + Math.random() * 2) + "s";
    s.style.width = s.style.height = (4 + Math.random() * 6) + "px";
    container.appendChild(s);
  }
}
createSparkles();

// --------------------
// Section transition helper
// --------------------
function goTo(hideEl, showEl) {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
}

// --------------------
// Start
// --------------------
startBtn.onclick = () => {
  loading.style.display = "none";
  main.classList.remove("hidden");
};

// Hero → Cake
next1.onclick = () => goTo(hero, cake);

// Cake → Gift
next2.onclick = () => goTo(cake, gift);

// Gift → Message
openGift.onclick = () => {
  const box = document.getElementById("giftBox");
  box.style.transform = "scale(1.4) rotate(10deg)";
  box.style.transition = "transform .4s";
  setTimeout(() => {
    goTo(gift, message);
    typeMessage();
  }, 500);
};

// Message → Final
next3.onclick = () => {
  goTo(message, finalPage);
  confetti();
};

// --------------------
// Typewriter Effect
// --------------------
const text = `Happy 20th Birthday Dnyaneshwari! ❤️

Today is your special day and I just wanted to remind you how amazing you are.

Thank you for being such a kind, caring and wonderful friend.

May this new year of your life bring you endless happiness, success, beautiful memories and lots of smiles.

Keep shining...
Keep smiling...
Keep being the wonderful person you are.

May all your dreams come true.

Happy Birthday once again! 🎂🎉💖`;

let i = 0;

function typeMessage() {
  typing.innerHTML = "";
  i = 0;
  let timer = setInterval(() => {
    typing.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 35);
}

// --------------------
// Confetti
// --------------------
function confetti() {
  for (let i = 0; i < 150; i++) {
    let piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.width = "10px";
    piece.style.height = "10px";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.background = `hsl(${Math.random() * 360},100%,60%)`;
    piece.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    piece.style.zIndex = "999";
    document.body.appendChild(piece);

    let fall = piece.animate(
      [
        { transform: "translateY(0px) rotate(0deg)" },
        { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)` }
      ],
      {
        duration: 2500 + Math.random() * 2000,
        easing: "linear"
      }
    );
    fall.onfinish = () => piece.remove();
  }
}

// --------------------
// Floating Balloons
// --------------------
setInterval(() => {
  let balloon = document.createElement("div");
  balloon.innerHTML = ["🎈","🎀","🎊","🌸","⭐"][Math.floor(Math.random()*5)];
  balloon.style.position = "fixed";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.bottom = "-60px";
  balloon.style.fontSize = (28 + Math.random() * 28) + "px";
  balloon.style.zIndex = "50";
  balloon.style.pointerEvents = "none";
  document.body.appendChild(balloon);

  let fly = balloon.animate(
    [
      { transform: "translateY(0px) rotate(0deg)" },
      { transform: `translateY(-${window.innerHeight + 120}px) rotate(${Math.random() > .5 ? 15 : -15}deg)` }
    ],
    { duration: 7000 + Math.random() * 3000, easing: "ease-in" }
  );
  fly.onfinish = () => balloon.remove();
}, 1200);
