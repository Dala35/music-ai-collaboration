// Quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Criação de elementos dinâmicos
  const title = document.createElement("h1");
  title.textContent = "🎵 Music AI Collaboration";

  const description = document.createElement("p");
  description.textContent =
    "Explore uma nova forma de criar música — junte-se à Inteligência Artificial em tempo real.";

  const button = document.createElement("button");
  button.textContent = "Iniciar colaboração com IA";

  const footer = document.createElement("footer");
  footer.textContent = "Desenvolvido por Dala35 • 2025";

  // Interação simples
  button.addEventListener("click", () => {
    button.disabled = true;
    button.textContent = "🎧 Conectando à IA...";
    setTimeout(() => {
      button.textContent = "🚀 IA pronta para colaborar!";
      button.disabled = false;
    }, 2000);
  });

  // Monta tudo na página
  root.appendChild(title);
  root.appendChild(description);
  root.appendChild(button);
  root.appendChild(footer);
});
