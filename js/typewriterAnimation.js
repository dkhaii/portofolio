const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const text = ["Mordekhai Gerine Lumangkun", "Programmer ?", "Engineer ?", "Developer ?"];

const typingDelay = 200;
const eraseTextDelay = 100;
const typeNewTextDelay = 2000;

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < text[textIndex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    typedText.textContent += text[textIndex].charAt(charIndex);
    charIndex++;

    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");

    setTimeout(erase, typeNewTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    typedText.textContent = text[textIndex].substring(0, charIndex - 1);
    charIndex--;

    setTimeout(erase, eraseTextDelay);
  } else {
    cursor.classList.remove("typing");
    textIndex++;

    if (textIndex >= text.length) {
      textIndex = 0;
    }

    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (text.length) {
    setTimeout(type, typeNewTextDelay + 250);
  }
});
