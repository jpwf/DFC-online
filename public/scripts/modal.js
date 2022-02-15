
import { ropliq as rplq }  from './index.js';
const backhome = document.getElementById("home")
let ropliq_result_2 = document.getElementById("R-OP-LIQ-2")
let ropliq_result_3 = document.getElementById("R-OP-LIQ-3")
let ropliq_result_4 = document.getElementById("R-OP-LIQ-4")


backhome.addEventListener("click", () => {
  window.location = "/"
  alert("it works")
})

//testar colocar a págica como modal novamente, e ao invés de só usar display:none na fcd-results.html
//Usar na index também, para que uma apareça e a outra não


function ropliqcalc() {
  
  let ropliq_1 = parseInt(rplq * (1 + 0.1))
  let ropliq_2 = parseInt(ropliq_1 * (1 + 0.1))
  let ropliq_3 = parseInt(ropliq_2 * (1 + 0.1))
  let ropliq_perpet = parseInt(ropliq_3 * (1 + 0))





  ropliq_result_1.innerHTML = parseInt(ropliq_1)
  ropliq_result_2.innerHTML = parseInt(ropliq_2)
  ropliq_result_3.innerHTML = parseInt(ropliq_3)
  ropliq_result_4.innerHTML = parseInt(ropliq_perpet)
}
ropliqcalc()

//tentar criar uma função no arquivo index.js para armazenar esses valores:
  
  //
//Porque eles travam a função do botão(por algum motivo que eu não faço ideia)


