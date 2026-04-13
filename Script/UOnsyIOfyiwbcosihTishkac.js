const screen = document.getElementById("screen");

const contents = [
  "LOADING DATA...",
  "PLEASE TRY AGAIN LATER",
  "ACCESS GRANTED",
  "ERROR: SIGNAL LOST",
  "RECONNECTING...",
  "WELCOME USER"
];

function randomContent() {
  return contents[Math.floor(Math.random() * contents.length)];
}

function switchScreen() {
  glitchFrame();

  setTimeout(() => {
    screen.classList.add("flash-white");
  }, 20);

  setTimeout(() => {
    screen.classList.remove("flash-white");
    screen.textContent = randomContent();
    screen.classList.add("flash-bright");
  }, 50);

  // back to normal
  setTimeout(() => {
    screen.classList.remove("flash-bright");
    screen.style.transform = "none";
    screen.style.filter = "none";
  }, 90);
}

// glitch）
function glitchFrame() {
  // 偏移
  const dx = (Math.random() - 0.5) * 20;
  const dy = (Math.random() - 0.5) * 20;

  const hue = Math.random() * 360;

  screen.style.transform = `translate(${dx}px, ${dy}px)`;
  screen.style.filter = `hue-rotate(${hue}deg) contrast(2)`;

  screen.textContent = generateCorruptedText();
}


function generateCorruptedText() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
  let result = "";
  for (let i = 0; i < 20; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}