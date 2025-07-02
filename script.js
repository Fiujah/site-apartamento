const galeria = document.getElementById('galeria');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Lista completa de imagens com subnúmeros
const imagens = [
  "planta1.jpg",
  "sala1.jpg",
  "sala2.jpg",
  "sala3.jpg",
  "sala4.jpg",
  "cozinha1.jpg",
  "cozinha2.jpg",
  "cozinha3.jpg",
  "cozinha4.jpg",
  "cozinha5.jpg",
  "quarto1.1.jpg",
  "quarto1.2.jpg",
  "quarto1.3.jpg",
  "quarto1.4.jpg",
  "quarto2.1.jpg",
  "quarto2.2.jpg",
  "quarto2.3.jpg",
  "quarto2.4.jpg",
  "banheiro1.jpg",
  "banheiro2.jpg",
  "banheiro3.jpg",
  "banheiro4.jpg",
  "banheiro5.jpg",
  "lavatorio1.jpg",
  "lavatorio2.jpg",
  "lavanderia1.jpg",
  "lavanderia2.jpg",
];

imagens.forEach(nome => {
  // Remove extensão .jpg
  const nomeBase = nome.split('.')[0]; // Ex: quarto1

  // Captura a extensão completa do número: ex: "1.1" de "quarto1.1"
  const numeroCompleto = nome.match(/\d+\.\d+|\d+/)?.[0] || "";

  // Captura a parte do tipo: ex: "quarto"
  const tipo = nome.match(/^[a-zA-Z]+/)?.[0] || "";

  // Capitaliza tipo
  const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1);

  // Monta legenda final: ex: "Quarto - 1.1"
  const nomeFormatado = `${tipoFormatado} - ${numeroCompleto}`;

  // Cria elementos
  const container = document.createElement('div');
  container.classList.add('imagem-container');

  const img = document.createElement('img');
  img.src = `img/${nome}`;
  img.alt = nomeFormatado;

  const legenda = document.createElement('p');
  legenda.textContent = nomeFormatado;

  container.appendChild(img);
  container.appendChild(legenda);
  galeria.appendChild(container);

  // Clique para abrir imagem
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

// Fecha modal ao clicar fora
modal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});
