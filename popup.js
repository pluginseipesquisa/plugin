

function listenClick() {


  // scripts executados quando acionado ao click do btn Carregar Dados
  const button = document.getElementById('get-data');
  button.addEventListener('click', () => {

    // objeto criado para armazenar os retornos
	  // const arrRetorno = [];

    // script executado para buscar os parâmetros do formData
    chrome.tabs.executeScript({
      file: 'scripts/form-data.js'
    }, function (resultsFormParams) {
      console.log(resultsFormParams);

      // script executado para retornar o numero de paginas e resultados e apresentar na popup
      chrome.tabs.executeScript({
          file: 'scripts/total-results.js'
      }, function (resultsTotal) {
        console.log(resultsTotal);
        if(resultsTotal[0]==null){
          alert('sem resultados');
          return
        }  
        // armazena o total de paginas para realizar a iteração
        totalResults = parseInt(getTotal(resultsTotal));
        nPagesSei = parseInt(totalResults);
        totalPages = Math.trunc(totalResults/10);

        // seleciona os elementos no html da popup
        const resultsSei = document.querySelector("#results");
        const pagesSei = document.querySelector("#pages");

        // insere os valores de total de resultados e páginas no html da popup
        resultsSei.insertAdjacentHTML("beforeend", `<div id="numberResults">${totalResults}</div>`);
        pagesSei.insertAdjacentHTML("beforeend", `<div>${totalPages} </div>`);

      	//seleciona a div para inserir template e resultados
        const popup = document.querySelector("#janela-popup");

        //insere template no html da popup
        popup.insertAdjacentHTML("beforeend",
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
          </div>`);

        // prepara os itens html da popup que recebem os resultados
        const colType = document.querySelector("#p-sei-type");
        const colNumber = document.querySelector("#p-sei-number");
        const colSubject = document.querySelector("#p-sei-subject");
        const colDate = document.querySelector("#p-sei-date");
        const colDepartment = document.querySelector("#p-sei-unity")
        const colUser = document.querySelector("#p-sei-user")

        // recebe os parâmetros do form
        const formParams = resultsFormParams[0][1];
        //console.log(formParams)

        // converte a string para JSON
        let formJson = JSON.parse(formParams);

        for (var i=0; i < nPagesSei; i++) {

          // atualiza o parâmetro
        	formJson.hdnInicio = i*10;
        	// console.log(i)
        	//console.log(frmDt)

          // monta um novo form
        	let formSei = new FormData();
          // insere os parametros atualizados
        	for ( var key in formJson ) {
            formSei.append(key, formJson[key]);
        	}

        	// busca os resultados com a URL retornada e o form atualizado
          fetch(resultsFormParams[0][0], {
            method: 'POST',
            body: formSei,
         }).then(
            response => response.arrayBuffer()
         ).then(buffer => {
              let decoder = new TextDecoder("iso-8859-1");
              let text = decoder.decode(buffer);
              const parser = new DOMParser();
              const htmlDocument = parser.parseFromString(text, "text/html");

              const section = htmlDocument.documentElement.querySelectorAll("#conteudo");

              //const tables = section.querySelectorAll(".resultado")
              var tables = section[0].querySelectorAll(".resultado");

              tables.forEach(function(data){
                typeProcNumber = data.querySelectorAll(".resTituloEsquerda")[0].innerText;
                numDoc = data.querySelectorAll(".resTituloDireita")[0].innerText;
                subject = data.querySelectorAll(".resSnippet")[0].innerText;
                department = data.querySelectorAll(".ancoraSigla")[0].outerHTML;
                user = data.querySelectorAll(".ancoraSigla")[1].outerHTML;
                date = data.querySelectorAll(".metatag tr")[0].lastElementChild.innerText.split(" ")[1];

                html = `<p>${typeProcNumber}</p>`
                colType.insertAdjacentHTML("beforeend", html);

                html = `<p>${numDoc}</p>`
                colNumber.insertAdjacentHTML("beforeend", html);

                html = `<p>${subject}</p>`
                colSubject.insertAdjacentHTML("beforeend", html);

                html = `<p>${department}</p>`
                colDepartment.insertAdjacentHTML("beforeend", html);

                html = `<p>${user}</p>`
                colUser.insertAdjacentHTML("beforeend", html);

                html = `<p>${date}</p>`
                colDate.insertAdjacentHTML("beforeend", html);

              });
          });
        };
      });
    });
    function getTotal(resultsTotal){
      sptTotal = resultsTotal[0].split(" ");
      var total = 0;
      isPen = false;
      
      if(sptTotal.length==2){
        total = parseInt(sptTotal[0])
      }else{
        sptTotal.forEach(function(t){
            if(isPen){
            total = parseInt(t)
          }
            if(t=='de'){
              isPen=true;
            }
          })
      }
      
      return total
      
    }
  });
};


listenClick();


const listenExport = () => {

 // insert function export data
 const buttonExport = document.getElementById('export-data');
 console.log(buttonExport);
 buttonExport.addEventListener('click', () => {
   console.log("Teste do Export");

  (async () => {
  const src = chrome.runtime.getURL("scripts/export-data.js");
  const contentMain = await import(src);
  contentMain.exportData()
  })();

  // inset function!!!
 });
};

listenExport();
