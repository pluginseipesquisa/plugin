
const totalResults = () => {

  // identifica a pagina ativa de resultados
  let activePage = parseInt(document.querySelector(".paginas b").innerText);

  // identifica o total de resultados encontrados na pesquisa
  const total = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0]);

  // identifica o total páginas
  const totalPages = Math.trunc(total/10) + 1;



  // retorna total de resultados e total de páginas
  return [total, totalPages]
}

totalResults();
