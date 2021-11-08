function setData() {
  const url = window.location.href;
  const formSei = new FormData(document.getElementById("frmPesquisaProtocolo"));

  const body = document.querySelector("body");

  // const head = document.querySelector("head");
  // const metadata = document.querySelectorAll("#conteudo .resultado .metatag tr")
  
  // results.forEach( (result) => {
  //   console.log(result.innerText);
  //   lista.insertAdjacentHTML("beforeend", `<p>${result.innerText}</p>`)
  // });

  // head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="stylesheets/p-sei-style.css">`);

  // const popup = document.querySelector("#popup");
  // console.log(popup);

  body.insertAdjacentHTML("beforeend",
    `<div id="table-results" class="grid-container" style="border-bottom: 1px solid #dddddd; display: grid; grid-template-columns: auto auto auto auto auto auto;">
      <div class="column" >Tipo</div>
      <div class="column" >Nº</div>
      <div class="column" >Assunto</div>
      <div class="column" >Data</div>
      <div class="column" >Unidade Geradora</div>
      <div class="column" >Usuário Gerador</div>
      <div class="column" id="p-sei-type"></div>
      <div class="column" id="p-sei-number"></div>
      <div class="column" id="p-sei-subject"></div>
      <div class="column" id="p-sei-date"></div>
      <div class="column" id="p-sei-unity"></div>
      <div class="column" id="p-sei-user"></div>
    </div>`

  )
  const colType = document.querySelector("#p-sei-type");
  const colNumber = document.querySelector("#p-sei-number");
  const colSubject = document.querySelector("#p-sei-subject");
  const colDate = document.querySelector("#p-sei-date");
  const colUnity = document.querySelector("#p-sei-unity")
  const colUser = document.querySelector("#p-sei-user")

  // console.log(colUnity);
  // console.log(chrome);
  // console.log(chrome.pageAction);
  // console.log(chrome.tabs);

  // tipo de processo e número processo
  const typeProcNumber = document.querySelectorAll("td.resTituloEsquerda");
  typeProcNumber.forEach( (element, index) => {
    colType.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
  });

  // número documento - aparece apenas na pesquisa por documento
  const numDocArray = document.querySelectorAll("td.resTituloDireita");
  numDocArray.forEach( (element, index) => {
    colNumber.insertAdjacentHTML("beforeend", `<p>${element.innerText}`)
  });

  // assunto documento - aparece apenas na pesquisa por documento
  const subjectArray = document.querySelectorAll(".resSnippet");
  subjectArray.forEach( (element, index) => {
    colSubject.insertAdjacentHTML("beforeend", `<p>${element.innerText}`)
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



setData();

