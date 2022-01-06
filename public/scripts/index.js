const sendresults = document.getElementById("send-info")
const backhome = document.getElementById("close")

sendresults.addEventListener("click", () => {
  modal.classList.remove("hide")
})
backhome.addEventListener("click", () => {
  modal.classList.add("hide")
})

//JS para o modal a partir daqui