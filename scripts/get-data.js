function setData() {
  const results = document.querySelectorAll("#conteudo .resultado");
  const body = document.querySelector("body");
  const infos = document.querySelectorAll(".ancoraSigla")
  // const metadata = document.querySelectorAll("#conteudo .resultado .metatag tr")

  

  // results.forEach( (result) => {
  //   console.log(result.innerText);
  //   lista.insertAdjacentHTML("beforeend", `<p>${result.innerText}</p>`)
  // });

  body.insertAdjacentHTML("beforeend",
    `<table>
      <thead>
      <tr>
        <th>Tipo</th>
        <th>Nº</th>
        <th>Assunto</th>
        <th>Data</th>
        <th>Unidade Geradora</th>
        <th>Usuário Gerador</th>
      </tr>
      <thead>
      <tbody>
          <div id="p-sei-type"></div>
          <td id="number"></td>
          <td id="subject"></td>
          <td id="date"></td>
          <td id="p-sei-unity"></td>
          <div id="user"></div>
      </tbody>
    </table>`

  )

  const colType = document.querySelector("#p-sei-unity")
  const colUser = document.querySelector("#user")

  console.log(colType);

  infos.forEach( (element, index) => {
    if (index % 2 === 0) {
      colType.insertAdjacentHTML("beforeend", `<p>${element.innerText}</p>`)
    } else {
      colUser.insertAdjacentHTML("beforeend", `<td>${element.innerText}</td>`)
    }
  });

  

}



setData();

