
function listenClick() {

  const buttonSet = document.getElementById('set-data');
  buttonSet.addEventListener('click', () => {

    chrome.tabs.executeScript({
      file: 'scripts/total-results.js'
    }, function (results) {
      console.log(results);
      const resultsSei = document.querySelector("#results");
      const pagesSei = document.querySelector("#pages");
      resultsSei.insertAdjacentHTML("beforeend", `<div>${results[0][0]}</div>`);
      pagesSei.insertAdjacentHTML("beforeend", `<div>${results[0][1]} </div>`);

    });  
  });
  
  const button = document.getElementById('get-data');
  button.addEventListener('click', () => {

    // chrome.tabs.executeScript({
    //   file: 'scripts/total-results.js'
    // }, function (results) {
    //   console.log(results);
    //   const resultsSei = document.querySelector("#results");
    //   const pagesSei = document.querySelector("#pages");
    //   resultsSei.insertAdjacentHTML("beforeend", `<div>${results[0][0]}</div>`);
    //   pagesSei.insertAdjacentHTML("beforeend", `<div>${results[0][1]} </div>`);

    // });
    
    const totalPages = parseInt(document.querySelector("#pages div").innerText);

    for(var i = 0; i < totalPages; i++){

      chrome.tabs.executeScript({
        file: 'scripts/get-data.js'
      }, function (results) {
        console.log(results);
        const popup = document.querySelector("#janela-popup");
        popup.insertAdjacentHTML("beforeend", `<div> ${results[0]} </div>`);
    
      });
      
      chrome.tabs.executeScript({
        file: 'scripts/nav-pages.js'
      }, function (results) {
        console.log(results[0]);
        // const popup = document.querySelector("#janela-popup");
        // popup.insertAdjacentHTML("beforeend", `<div> ${results[0]} </div>`);
    
      });
      
    };
  });
  
  // insert function export data
  const buttonExport = document.getElementById('export-data');
  buttonExport.addEventListener('click', () => {
    console.log("Teste do Export");
// inset function!!!

  });
  // end insert function export data

};

listenClick();

