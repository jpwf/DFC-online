const backhome = document.getElementById("close")
var ropliq_result_2 = document.getElementById("R-OP-LIQ-2")
var ropliq_result_3 = document.getElementById("R-OP-LIQ-3")
var ropliq_result_4 = document.getElementById("R-OP-LIQ-4")
var ropliq_1 = parseInt(ropliq.value * (1 + 0.1))
var ropliq_2 = parseInt(ropliq_1 * (1 + 0.1))
var ropliq_3 = parseInt(ropliq_2 * (1 + 0.1))
var ropliq_perpet = parseInt(ropliq_3 * (1 + 0))

backhome.addEventListener("click", () => {
  window.location = "/"
})





ropliq_result_1.textContent = parseInt(ropliq_1)
ropliq_result_2.textContent = parseInt(ropliq_2)
ropliq_result_3.textContent = parseInt(ropliq_3)
ropliq_result_4.textContent = parseInt(ropliq_perpet)