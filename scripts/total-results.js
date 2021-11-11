
const totalResults = () => {

  const total = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" "));


  // retorna total de resultados e total de páginas
  return document.querySelectorAll("#conteudo .barra")[0].innerText
}

totalResults();
