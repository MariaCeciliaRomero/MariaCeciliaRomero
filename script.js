const text = "Analista Funcional / Desarrolladora IT"; // Título
const typingEffect = document.getElementById("typing-effect");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingEffect.innerHTML += text.charAt(index); // Agrega letra por letra
    index++;
    setTimeout(typeText, 100); // Ajusta la velocidad aquí (ms)
  }
}

typeText();
