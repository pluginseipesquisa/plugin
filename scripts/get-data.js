function setData() {
  const url = window.location.href;
  const formSei = new FormData(document.getElementById("frmPesquisaProtocolo"));

  const body = document.querySelector("body");

  body.insertAdjacentHTML("beforeend",
    `<div id="table-results" class="grid-container">
      <div class="columnH"  id="Tipo">Tipo</div>
      <div class="columnH" id="Numero">Número</div>
      <div class="columnH" id="Assunto">Assunto</div>
      <div class="columnH" id="Data">Data</div>
      <div class="columnH" id="Unidade">Unidade</div>
      <div class="columnH" id="Usuario">Usuário</div>
      <div class="column border" id="p-sei-type"></div>
      <div class="column border" id="p-sei-number"></div>
      <div class="column border" id="p-sei-subject"></div>
      <div class="column border" id="p-sei-date"></div>
      <div class="column border" id="p-sei-unity"></div>
      <div class="column border" id="p-sei-user"></div>
    </div>`

  )
  const colType = document.querySelector("#p-sei-type");
  const colNumber = document.querySelector("#p-sei-number");
  const colSubject = document.querySelector("#p-sei-subject");
  const colDate = document.querySelector("#p-sei-date");
  const colUnity = document.querySelector("#p-sei-unity")
  const colUser = document.querySelector("#p-sei-user")


  // tipo de processo e número processo
  const typeProcNumber = document.querySelectorAll("td.resTituloEsquerda");
  typeProcNumber.forEach( (element, index) => {
    colType.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
  });

  // número documento - aparece apenas na pesquisa por documento
  const numDocArray = document.querySelectorAll("td.resTituloDireita");
  numDocArray.forEach( (element, index) => {
    colNumber.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
  });

  // assunto documento - aparece apenas na pesquisa por documento
  const subjectArray = document.querySelectorAll(".resSnippet");
  subjectArray.forEach( (element, index) => {
    colSubject.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
  });


  // unidade e usuário
  // Usuário e sigla da unidade - como pegar o html?
  // const infos = document.querySelectorAll(".ancoraSigla")
  const infos = document.querySelectorAll(".metatag td a");
  infos.forEach( (element, index) => {
    if (index % 2 === 0) {
      console.log(element);
      colUnity.insertAdjacentHTML("beforeend", `<p>${element.outerHTML}</p>`)
    } else {
      colUser.insertAdjacentHTML("beforeend", `<p>${element.outerHTML}</p>`)
    }
  });

  // data 
  const dateArray = document.querySelectorAll(".metatag tr");
  dateArray.forEach( (element, index) => {
    const date = element.lastElementChild.innerText.split(" ")[1];
    colDate.insertAdjacentHTML("beforeend", `<p>${date}</p>`)
  });

  document.querySelectorAll(".paginas a")[0].click();


  const tableResults = document.getElementById("table-results");
  return tableResults.outerHTML
}

// function data() {
//   setData();
//   let pagesNavigator = document.querySelectorAll(".paginas a");
//   let nextPage = (pagesNavigator[pagesNavigator.length - 1])
  
//   while (nextPage.innerText === "Próxima") {
//     nextPage.click();
//     setData();
//     pagesNavigator = document.querySelectorAll(".paginas a");
//     console.log(pagesNavigator)
//     nextPage = (pagesNavigator[pagesNavigator.length - 1]);
//     console.log(nextPage);
//     break
//   };
// }
// data();

setData();

