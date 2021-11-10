// function navPages {

//   // document.querySelectorAll(".paginas a")[0].click();
//   const totalResults = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0])
//   const totalPages = Math.trunc(totalResults/10) + 1

//   const pagesNavigator = document.querySelectorAll(".paginas a");
//   const nextPage = (pagesNavigator[pagesNavigator.length - 1])

//   if (nextPage.innerText === "Próxima" && totalResults) {
//     nextPage.click();
//     chrome.tabs.executeScript({
//       file: 'scripts/get-data.js'
//     }, function (results) {
//       console.log(results);
//       const popup = document.querySelector("#janela-popup");
//       popup.insertAdjacentHTML("beforeend", `<div> ${results[0]} </div>`);
      
//     });
//   } else if (parseInt(nextPage.innerText) === (totalPages - 1)) {
//     console.log("Dados carregados com sucesso.")
//   } else {
//     console.log("Erro ao carregar os dados.")
//   };
  
//   // const paginaChange = document.querySelectorAll(".paginas a").length
//   // paginas[paginaChange -1].click();
// };


// function navPages(nextPage) {
//   document.querySelectorAll(".paginas a")[0].click();

//   let totalResults = null;

//   const a = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[0])
//   const b = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0])

//   const totalResults = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[0])

//   if (parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0]) !== null) {
//     let totalResults = parseInt(document.querySelectorAll("#conteudo .barra")[0].innerText.split(" ")[5].split("T")[0]);
//     const totalPages = Math.trunc(totalResults/10) + 1;
//   };

//   if (nextPage.innerText === "Próxima") {
//     nextPage.click();
//     setData();
//   };
//   console.log("funciona");


//   // else if (parseInt(nextPage.innerText) === (totalPages - 1)) {
//   //   console.log("Dados carregados com sucesso.");
//   // }

//   // const paginaChange = document.querySelectorAll(".paginas a").length
//   // paginas[paginaChange -1].click();
// };

function navPages() {
  let i = document.querySelectorAll("div")
  let length = i.length
  let totalPages = parseInt(i[length - 1].innerText);

  let activePage = parseInt(document.querySelector(".paginas b").innerText)
  let nextPage = (activePage + 1);
  let activePageIndex = activePage - 1;

  if (activePage < totalPages ) {
    let link = document.querySelector(.paginas a)[activePageIndex];
    let link = document.querySelectorAll(".paginas a")[activePageIndex + 1];
    link.click();
    // let navegar = 10 * (activePage - 1);
    // let body = document.querySelector("body");
    // body.insertAdjacentHTML("beforeend", `<a href="javascript:navegar(${navegar})"></a>`);
    // let link = <a href="javascript:navegar(`${navegar}`)"></a>;
  } else {
    console.log("dados carregados com sucesso")
  }
 

}


navPages();


