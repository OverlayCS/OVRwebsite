// script.js
window.addEventListener("DOMContentLoaded", () => {
  const glitchText = document.querySelectorAll(".glitch");
  glitchText.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.classList.add("glitch-active");
    });
    el.addEventListener("mouseleave", () => {
      el.classList.remove("glitch-active");
    });
  });

  // Simple particle background (ASCII-styled random blips)
  const asciiStream = document.createElement('div');
  asciiStream.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
    font-family: monospace;
    color: rgba(0,255,150,0.05);
    font-size: 14px;
    overflow: hidden;
    white-space: pre;
  `;

  document.body.appendChild(asciiStream);

  const lines = 40;
  const columns = 120;

  function generateAsciiNoise() {
    let str = "";
    for (let i = 0; i < lines; i++) {
      for (let j = 0; j < columns; j++) {
        str += Math.random() > 0.98 ? "#" : " ";
      }
      str += "\n";
    }
    asciiStream.textContent = str;
  }

  setInterval(generateAsciiNoise, 100);
});
