function setData() {

  // cria um elemento do tipo FormData com os valores do form da página de pesquisa
  formData = new FormData(document.getElementById("frmPesquisaProtocolo"))

  // cria objeto para armazenar os valores trazidos no form criado
  let object = {};
  
  // passa como chave/valor cada satributo do form de pesquisa
  formData.forEach((value, key) => object[key] = value);

  // transforma o objeto em um string.jason para viabilizar o envio da resposta
  let json = JSON.stringify(object);
  
  // retorna a url e os parâmetros a serem utilizados 
  return [document.getElementById("frmPesquisaProtocolo").action, json];
}

setData();

