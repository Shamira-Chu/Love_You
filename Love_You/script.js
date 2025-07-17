const container = document.getElementById("loveContainer");

const frases = ["Te Amo", "Te Amo", "Te Amo", "Te Amo", "Te Amo"];
const quantidade = 608;

for (let i = 0; i < quantidade; i++) {
  const span = document.createElement("span");
  span.classList.add("teAmo");
  span.textContent = frases[Math.floor(Math.random() * frases.length)];
  
  // Efeito de cor ou delay aleatório
  span.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(span);
}

// mais efeito...
const heartsContainer = document.querySelector('.hearts-container');

setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💗';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);

// :coraçao efeito
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
