

function listenClick() {

  
  // scripts executados quando acionado ao click do btn Carregar Dados
  const button = document.getElementById('get-data');
  button.addEventListener('click', () => {

    // objeto criado para armazenar os retornos
	  const arrRetorno = [];

    // script executado para buscar os parâmetros do formData
    chrome.tabs.executeScript({
      file: 'scripts/form-data.js'
    }, function (resultsFormParams) {
      // console.log('resultados', resultsFormParams);
      
      // script executado para retornar o numero de paginas e resultados e apresentar na popup
      chrome.tabs.executeScript({
          file: 'scripts/total-results.js'
      }, function (resultsTotal) {

        // seleciona os elementos no html da popup
        const resultsSei = document.querySelector("#results");
        const pagesSei = document.querySelector("#pages");
        
        // insere os valores de total de resultados e páginas no html da popup
        resultsSei.insertAdjacentHTML("beforeend", `<div>${resultsTotal[0][0]}</div>`);
        pagesSei.insertAdjacentHTML("beforeend", `<div>${resultsTotal[0][1]} </div>`);

        // armazena o total de paginas para realizar a iteração
      	let nPagesSei = resultsTotal[0][1];

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
        
        //insere template no html da popup
        const formData_ = resultsFormParams[0][1];
        //console.log(formData_)
        
        frmDt = JSON.parse(formData_);
        
        for (var i=0; i < nPagesSei; i++) {
        	frmDt.hdnInicio = i*10;
        	console.log(i)
        	//console.log(frmDt)
        	
        	var form_data = new FormData();
        	for ( var key in frmDt ) {
        	    form_data.append(key, frmDt[key]);
        	}
        	
        	//console.log(form_data)
        	
      	  	const pagina = fetch(resultsFetch[0][0], {
                method: 'POST',
                body: form_data,
             }).then(
            		 response => response.text()
             ).then(text => {
            	    const parser = new DOMParser();
            	    const htmlDocument = parser.parseFromString(text, "text/html");
            	    const section = htmlDocument.documentElement.querySelectorAll(".resultado");
            	    console.log(section)
            	    
            	    var doc = parser.parseFromString(section, 'text/html');
            	    popup.insertAdjacentHTML("beforeend", doc.documentElement.innerHTML);
            	  })
             /*.then(function(data){
            		 //data => console.log(data)
            	 console.log(data);
            	 //popup.insertAdjacentHTML("beforeend", '<div> '+i+'</div>');
        	});*/
      	  	//popup.insertAdjacentHTML("beforeend", `<div> ${i} </div>`);
        	//formData.set("hdnInicio", i*10)
      	   // more statement
        }
      });
    });
  });
};

listenClick();