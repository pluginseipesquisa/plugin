function setData() {
  const title = document.querySelectorAll("#conteudo .resultado");

  const logArrayElements(element, index, title) {
    console.log("a[" + index + "] = " + element);
  }

  title.forEach(logArrayElements);

  // const url = window.location.href;

  // return {
  //   title: title,
  //   // url: url
  // }
}

setData();