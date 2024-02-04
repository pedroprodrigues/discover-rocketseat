function toggleMode() {
  const html = document.documentElement
  // fazendo if na mão de mudar a classe
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //usando fução toggle pronta
  html.classList.toggle("light")


  //função para mudar imagem
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //se tiver light mode, adicionar imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar-light.png")
  }

  //se não, manter a imagem padrão
  else {
    img.setAttribute("src", "./Assets/DSC01674 (2).jpg")
  }

  // Mudar texto alt
}
