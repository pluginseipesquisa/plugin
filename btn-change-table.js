// import { set-data } from 'get-data.js';

// const btnChangeTable = () => {
let btn = document.createElement("button");
btn.innerHTML = "Tabular";
btn.setAttribute('class', 'infraButton');
document.querySelector(".barra").appendChild(btn);
btn.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".infraAreaTabela").style.display = "none";

  // tentativa de inserir a função set-data():
  // const body = document.querySelector('body');
  // body.insertAdjacentHTML("beforeend", "<script type= 'module', src= 'get-data.js'></script>");
  // document.querySelector(".infraAreaTabela").insertAdjacentHTML("afterend", "<div class='tabular_results'></div>");
  // let para = testexport()
  // document.querySelector(".tabular_results").appendChild(para);
});
// }
// export { btnChangeTable }

     // btn.addEventListener("click", setData());
