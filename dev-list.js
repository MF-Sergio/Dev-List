const seletorArea = document.querySelector("[data-area]");
const frontOpcoes = document.querySelector(".questionario__opcoes-front");
const backOpcoes = document.querySelector(".questionario__opcoes-back");
const opcoesObjetivo = document.querySelector(".questionario__opcoes-objetivo");
const seletorObjetivo = document.querySelector("[data-objetivo]");
const seletorLinguagem =
  [
    document.querySelector("[data-frontOpcoes]"),
    document.querySelector("[data-backOpcoes]")
  ];


const toggleOpcoes = () => {
  const opcaoSelecionada = seletorArea.options[seletorArea.selectedIndex];

  if (opcaoSelecionada.value === "front-end") {
    frontOpcoes.classList.remove("questionario__opcoes--inativo");
    backOpcoes.classList.add("questionario__opcoes--inativo");
  } else if (opcaoSelecionada.value === "back-end") {
    backOpcoes.classList.remove("questionario__opcoes--inativo");
    frontOpcoes.classList.add("questionario__opcoes--inativo");
  } else {
    frontOpcoes.classList.add("questionario__opcoes--inativo");
    backOpcoes.classList.add("questionario__opcoes--inativo");
  }
};

const showObjetivos = (elemento) => {
  const selecionarOpcao = () => {
    const opcaoSelecionada = elemento.options[elemento.selectedIndex];

    if (opcaoSelecionada) {
      opcoesObjetivo.classList.remove("questionario__opcoes--inativo");
    }
  };

  elemento.addEventListener("change", selecionarOpcao)
}

const adicionarTecnologia = () => {
  const listaTecnologias = document.querySelector(".lista-tecnologias");

  const nomeDoItem = setInterval(() => {
    let input = prompt("Escreva a técnologia que você gostaria de adicionar a sua lista?");

    if (input === null) {
      clearInterval(nomeDoItem);
    } else if (input.trim() !== "") {
      let itemDaLista = document.createElement("li");
      itemDaLista.textContent = input;
      listaTecnologias.appendChild(itemDaLista);
      alert(`Bons estudos, espero que tenha sucesso nos estudos de ${input}`)
    }
  }, 0);
};

const selecionarObjetivo = () => {
  const opcaoSelecionada =
    seletorObjetivo.options[seletorObjetivo.selectedIndex];
  const areaSelecionada = seletorArea.value;

  if (opcaoSelecionada.value === "area-escolhida") {
    opcoesObjetivo.classList.remove("questionario__opcoes--inativo");
    setTimeout(function () { alert(`Ótimo, continue estudando e se dedicando ao ${areaSelecionada}`); }, 0);
  } else if (opcaoSelecionada.value === "fullstack") {
    opcoesObjetivo.classList.remove("questionario__opcoes--inativo");
    setTimeout(function () { alert("Excelente, é muito bom explorar áreas novas"); }, 0);
  }

  adicionarTecnologia();
}

seletorArea.addEventListener("change", toggleOpcoes);

seletorLinguagem.forEach(showObjetivos);

seletorObjetivo.addEventListener("change", selecionarObjetivo)