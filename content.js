// document.body.style.backgroundColor = "orange"
// document.querySelector = "orange"

const btnSeip = document.createElement("button");
btnSeip.style.backgroundColor = "green"
btnSeip.id = "get-data"
btnSeip.innerHTML = "SEI Pesquisa";
const metadata = document.querySelectorAll("#conteudo .resultado .metatag tr")
// const dados = metadata.forEach(result => console.log(result.innerText));


document.querySelector(".barra").appendChild(btnSeip)


btnSeip.addEventListener("click", (event) => {
  event.preventDefault();  
  // event.console.log(dados);
    // chrome.tabs.executeScript({
    //   file: 'scripts/get-data.js'
    // });
    
    // alert("O botão foi clicado");
 });

// btnSeip.addEventListener('click', () => {
//   chrome.tabs.executeScript({
//     file: 'scripts/get-data.js'
//   });
// })

 // btn.addEventListener("click", setData());
// document.querySelector(".barra").appendChild(btnSeip)
//   })