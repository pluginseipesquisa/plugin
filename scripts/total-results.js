
function totalResults() {
  
  const total = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0]);
  const totalPages = Math.trunc(total/10) + 1;

  let body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", `<div>${totalPages} </div>`);

  return [total, totalPages]
}

totalResults();
