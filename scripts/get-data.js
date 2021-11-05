function setData() {
  const url = window.location.href;
  const formSei = new FormData(document.getElementById("frmPesquisaProtocolo"));

  const results = document.querySelectorAll("#conteudo .resultado");
  const body = document.querySelector("body");
  const infos = document.querySelectorAll(".ancoraSigla")
  const head = document.querySelector("head");

  // const metadata = document.querySelectorAll("#conteudo .resultado .metatag tr")

  

  // results.forEach( (result) => {
  //   console.log(result.innerText);
  //   lista.insertAdjacentHTML("beforeend", `<p>${result.innerText}</p>`)
  // });


  // head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="stylesheets/p-sei-style.css">`);

  // const popup = document.querySelector("#popup");
  // console.log(popup);

  body.insertAdjacentHTML("beforeend",
    `<div class="grid-container" style="background-color: red; display: grid; grid-template-columns: auto auto auto auto auto auto;">
      <div class="column">Tipo</div>
      <div class="column">Nº</div>
      <div class="column">Assunto</div>
      <div class="column">Data</div>
      <div class="column">Unidade Geradora</div>
      <div class="column">>Usuário Gerador</div>
      <div class="column" id="p-sei-type"></div>
      <div class="column" id="number"></div>
      <div class="column" id="subject"></div>
      <div class="column" id="date"></div>
      <div class="column" id="p-sei-unity"></div>
      <div class="column" id="p-sei-user"></div>
    </div>`

  )

  const colUnity = document.querySelector("#p-sei-unity")
  const colUser = document.querySelector("#p-sei-user")

  // console.log(colUnity);
  // console.log(chrome);
  console.log(chrome.pageAction);
  // console.log(chrome.tabs);

  
  

  infos.forEach( (element, index) => {
    if (index % 2 === 0) {
      colUnity.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
    } else {
      colUser.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
    }
  });

  

}



setData();

