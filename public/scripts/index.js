const sendresults = document.getElementById("send-info")
const close = document.getElementById("home")

const debt = document.getElementById("debt")
const stocksquantity = document.getElementById("stocks-quantity")
const ropliq = document.getElementById("R-OP-LIQ") 
const nopat = document.getElementById("NOPAT")
const capex = document.getElementById("CAPEX")
const varncg = document.getElementById("VAR-NCG")
const depreciation = document.getElementById("depreciation")
const fcfirma = document.getElementById("fc-firma")



sendresults.addEventListener("click", () => {
  if(debt.value !=0 & stocksquantity.value !=0 & ropliq.value !=0 & nopat.value != 0 & capex.value != 0 & varncg.value != 0 & depreciation.value != 0 & fcfirma.value != 0){
    modal.classList.remove("hide")
    setTimeout(() =>{
      debt.value = ""
      stocksquantity.value = ""
      ropliq.value = "" 
      nopat.value = "" 
      capex.value = "" 
      varncg.value = "" 
      depreciation.value = "" 
      fcfirma.value = ""  
    }, 1000)
    ropliqcalc()
   
  }else{
    alert("Preencha todos os campos")
    setTimeout(() =>{
      debt.value = ""
      stocksquantity.value = ""
      ropliq.value = "" 
      nopat.value = "" 
      capex.value = "" 
      varncg.value = "" 
      depreciation.value = "" 
      fcfirma.value = ""  
    }, 2000)
  }
})
close.addEventListener("click", () =>{
  modal.classList.add("hide")
})


function ropliqcalc() {
  let rplq = ropliq.value
  let ropliq_1 = parseInt(rplq * (1 + 0.1))
  let ropliq_2 = parseInt(ropliq_1 * (1 + 0.1))
  let ropliq_3 = parseInt(ropliq_2 * (1 + 0.1))
  let ropliq_perpet = parseInt(ropliq_3 * (1 + 0.1))

  let ropliq_result_1 = document.getElementById("R-OP-LIQ-1")
  let ropliq_result_2 = document.getElementById("R-OP-LIQ-2")
  let ropliq_result_3 = document.getElementById("R-OP-LIQ-3")
  let ropliq_result_4 = document.getElementById("R-OP-LIQ-4")



  ropliq_result_1.innerHTML = parseInt(ropliq_1)
  ropliq_result_2.innerHTML = parseInt(ropliq_2)
  ropliq_result_3.innerHTML = parseInt(ropliq_3)
  ropliq_result_4.innerHTML = parseInt(ropliq_perpet)
}


// var ropliqvalue = ropliq.value

// const infos = {
//     ropliqvalue,
//     nopat,
//     capex,
//     varncg,
//     depreciation,
//     fcfirma,
    
// }




//métricas
// const perpetuidade = 0.01;
// const desconto_buffet = 0.1;

// const desconto_taxa_juros = 0;
//
//Receita operacional Líquida

//

// export { infos };