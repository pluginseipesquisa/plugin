function setData() {

  // cria um elemento do tipo FormData
  formData = new FormData(document.getElementById("frmPesquisaProtocolo"))

  // cria objeto para armazenar os valores trazidos no form criado
  let object = {};
  
  // passa como chave/valor cada satributo do form de pesquisa
  formData.forEach((value, key) => object[key] = value);

  // transforma o objeto em um string.json para viabilizar o envio da resposta
  let json = JSON.stringify(object);
  let resultados = JSON.stringify(document.querySelectorAll("#conteudo .barra")[0].innerText)
  // retorna a url e os parâmetros a serem utilizados 
  return [document.getElementById("frmPesquisaProtocolo").action, json, resultados];
}

setData();

