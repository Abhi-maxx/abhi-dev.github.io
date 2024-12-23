// Modal handling for the About section
function openModal() {
  document.getElementById('aboutModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('aboutModal').style.display = 'none';
}

// Dynamic text animation for the Home section
const dynamicText = document.getElementById('dynamic-text');
const texts = [
  "Hi, I'm Abhijeet Divekar",
  "Aspiring Software Developer",
  "Web Enthusiast",
];
let i = 0;

setInterval(() => {
  dynamicText.textContent = texts[i];
  i = (i + 1) % texts.length;
}, 3000);
