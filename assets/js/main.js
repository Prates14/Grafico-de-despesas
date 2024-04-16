// Requisitando dados (data.json) para o grafico de barras
fetch("./assets/data/data.json")
  .then((response) => response.json())
  .then((json) => dadosDaPagina(json))
  .catch((err) => console.warn(err));

//Barras do grafico como dias da semana
const seg = document.querySelector("#mon");
const ter = document.querySelector("#tue");
const qua = document.querySelector("#wed");
const qui = document.querySelector("#thu");
const sex = document.querySelector("#fri");
const sab = document.querySelector("#sat");
const dom = document.querySelector("#sun");

//Aplicando estilo e porcentagem de tamanho em cada barra do grafico conforme dados (data.json)
function dadosDaPagina(dados) {
  const semana = [seg, ter, qua, qui, sex, sab, dom];

  const data = new Date().getDay();
  switch (data) {
    case 0:
      semana[semana.length].style.backgroundColor = "#76b5bc";
      break;
    case 1:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
    case 2:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
    case 3:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
    case 4:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
    case 5:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
    case 6:
      semana[data - 1].style.backgroundColor = "#76b5bc";
      break;
  }

  for (let i = 0; i <= semana.length; i++) {
    semana[i].style.height = dados[i].amount + "%";
    semana[i].previousElementSibling.innerHTML = "$" + dados[i].amount;
  }
}

//Mostra o valor de cada barra do grafico separadamente
document.querySelectorAll(".stats").forEach((element) => {
  const div = element.querySelector("div");
  const span = element.querySelector(".exibir");

  div.addEventListener("mouseover", () => {
    span.style.display = "inline";
    div.style.opacity = 0.8;
  });

  div.addEventListener("mouseout", () => {
    span.style.display = "none";
    div.style.opacity = 1;
  });
});
