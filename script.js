// Passo 1: Pegar todos os pets da página
// Aqui estamos selecionando TODAS as divs (ou elementos) que possuem a classe "pet".
// Isso vira uma lista com todos os pets.
const pets = document.querySelectorAll(".pet");


// Passo 2: Pegamos os elementos do card principal
// Estes são os lugares onde as informações do pet clicado irão aparecer.
// Eles estão no card grande da direita 
const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricao");
const fotoGrande = document.getElementById("fotoGrande");


// Passo 3: Colocar um "ouvido" em cada pet
// Vamos usar um FOR para percorrer cada item dentro da lista "pets".
// O loop faz:
// - Começa no pet 0
// - Vai para o pet 1
// - Vai para o pet 2
// - ... e continua até o último pet da lista
for (let i = 0; i < pets.length; i++) {

  // Pegamos o pet atual da vez dentro do loop
  const pet = pets[i];

  // Dentro de cada pet, pegamos sua miniatura (a imagem pequena do pet)
  // Usamos querySelector para encontrar a IMG dentro do próprio pet
  const miniatura = pet.querySelector("img");

  // Passo 4: Quando clicarem na miniatura
  // Aqui adicionamos um "ouvinte" (event listener) para detectar cliques na miniatura
  miniatura.addEventListener("click", () => {

    // Troca o nome grande pelo nome do pet clicado
    // Aqui pegamos o H2 dentro do pet e jogamos para o card principal
    nome.textContent = pet.querySelector("h2").textContent;

    // Troca a descrição grande pela descrição do pet clicado
    // Aqui pegamos o texto da classe ".descricao" de cada pet
    descricao.textContent = pet.querySelector(".descricao").textContent;

    // Troca a imagem grande para ser igual à imagem clicada
    fotoGrande.src = miniatura.src;
  });
}
