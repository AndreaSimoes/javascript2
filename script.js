// Capturando os elementos pelo id
const titulo = document.getElementById('titulo');
const link = document.getElementById('link');
const listaNaoOrdenada = document.getElementById('lista-non-ordenada');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo ao título (h1)
titulo.innerText = 'Bem-vindo ao Projeto com JavaScript!';

// Adicionando conteúdo ao link (a)
link.innerText = 'Clique aqui para acessar o site de Educação';
link.target = "_blank"; // Abre o link em uma nova aba

// Adicionando itens à lista não ordenada (ul)
listaNaoOrdenada.innerHTML = `
  <li>Item 1 da lista não ordenada</li>
  <li>Item 2 da lista não ordenada</li>
  <li>Item 3 da lista não ordenada</li>
`;

// Adicionando itens à lista ordenada (ol) com links
listaOrdenada.innerHTML = `
  <li><a href="https://www.google.com" target="_blank">Google</a></li>
  <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
  <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
`;