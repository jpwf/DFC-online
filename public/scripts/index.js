const sendresults = document.getElementById("send-info")
const close = document.getElementById("home")

const debt = document.getElementById("debt")
const stocksquantity = document.getElementById("stocks-quantity")
const stock = document.getElementById("stockvalue")

const ropliq = document.getElementById("R-OP-LIQ") 
const nopat = document.getElementById("NOPAT")
const capex = document.getElementById("CAPEX")
const varncg = document.getElementById("VAR-NCG")
const depreciation = document.getElementById("depreciation")
const fcfirma = document.getElementById("fc-firma")



sendresults.addEventListener("click", () => {
  if(debt.value !=0 & stocksquantity.value !=0 & stock.value !=0 & ropliq.value !=0 & nopat.value != 0 & capex.value != 0 & varncg.value != 0 & depreciation.value != 0 & fcfirma.value != 0){
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
    calcs()
   
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
function nopatcalc() {
  let nopatv = nopat.value
  let nopat_1 = parseInt(nopatv * (1 + 0.1))
  let nopat_2 = parseInt(nopat_1 * (1 + 0.1))
  let nopat_3 = parseInt(nopat_2 * (1 + 0.1))
  let nopat_perpet = parseInt(nopat_3 * (1 + 0.1))

  let nopat_result_1 = document.getElementById("NOPAT-1")
  let nopat_result_2 = document.getElementById("NOPAT-2")
  let nopat_result_3 = document.getElementById("NOPAT-3")
  let nopat_result_4 = document.getElementById("NOPAT-4")



  nopat_result_1.innerHTML = parseInt(nopat_1)
  nopat_result_2.innerHTML = parseInt(nopat_2)
  nopat_result_3.innerHTML = parseInt(nopat_3)
  nopat_result_4.innerHTML = parseInt(nopat_perpet)
}
function capexcalc() {
  let cpxv = capex.value
  let capex_1 = parseInt(cpxv * (1 + 0.1))
  let capex_2 = parseInt(capex_1 * (1 + 0.1))
  let capex_3 = parseInt(capex_2 * (1 + 0.1))
  let capex_perpet = parseInt(capex_3 * (1 + 0.1))

  let capex_result_1 = document.getElementById("CAPEX-1")
  let capex_result_2 = document.getElementById("CAPEX-2")
  let capex_result_3 = document.getElementById("CAPEX-3")
  let capex_result_4 = document.getElementById("CAPEX-4")



  capex_result_1.innerHTML = parseInt(capex_1)
  capex_result_2.innerHTML = parseInt(capex_2)
  capex_result_3.innerHTML = parseInt(capex_3)
  capex_result_4.innerHTML = parseInt(capex_perpet)
}
function varncgcalc() {
  let vrncgv = varncg.value
  let vrncg_1 = parseInt(vrncgv * (1 + 0.1))
  let vrncg_2 = parseInt(vrncg_1 * (1 + 0.1))
  let vrncg_3 = parseInt(vrncg_2 * (1 + 0.1))
  let vrncg_perpet = parseInt(vrncg_3 * (1 + 0.1))

  let vrncg_result_1 = document.getElementById("VAR-NCG-1")
  let vrncg_result_2 = document.getElementById("VAR-NCG-2")
  let vrncg_result_3 = document.getElementById("VAR-NCG-3")
  let vrncg_result_4 = document.getElementById("VAR-NCG-4")



  vrncg_result_1.innerHTML = parseInt(vrncg_1)
  vrncg_result_2.innerHTML = parseInt(vrncg_2)
  vrncg_result_3.innerHTML = parseInt(vrncg_3)
  vrncg_result_4.innerHTML = parseInt(vrncg_perpet)
}
function deprecalc() {
  let deprecV = depreciation.value
  let deprec_1 = parseInt(deprecV * (1 + 0.1))
  let deprec_2 = parseInt(deprec_1 * (1 + 0.1))
  let deprec_3 = parseInt(deprec_2 * (1 + 0.1))
  let deprec_perpet = parseInt(deprec_3 * (1 + 0.1))

  let deprec_result_1 = document.getElementById("Depreciation-1")
  let deprec_result_2 = document.getElementById("Depreciation-2")
  let deprec_result_3 = document.getElementById("Depreciation-3")
  let deprec_result_4 = document.getElementById("Depreciation-4")



  deprec_result_1.innerHTML = parseInt(deprec_1)
  deprec_result_2.innerHTML = parseInt(deprec_2)
  deprec_result_3.innerHTML = parseInt(deprec_3)
  deprec_result_4.innerHTML = parseInt(deprec_perpet)
}
function fcdfirmacalc(){
  let fcfirma_ano1 = nopat_1 - capex_1 - vrncg_1 + derprec_1
  let fcfirma_ano2 = nopat_2 - capex_2 - vrncg_2 + derprec_2
  let fcfirma_ano3 = nopat_3 - capex_3 - vrncg_3 + derprec_3
  let fcfirma_perpet = nopat_perpet - capex_perpet - vrncg_perpet + derprec_perpet

  


  let fcfirma_result_1 = document.getElementById("FC-firma-1")
  let fcfirma_result_2 = document.getElementById("FC-firma-2")
  let fcfirma_result_3 = document.getElementById("FC-firma-3")
  let fcfirma_result_4 = document.getElementById("FC-firma-4")

  fcfirma_result_1.innerHTML = parseInt(fcfirma_ano1)
  fcfirma_result_2.innerHTML = parseInt(fcfirma_ano2)
  fcfirma_result_3.innerHTML = parseInt(fcfirma_ano3)
  fcfirma_result_4.innerHTML = parseInt(fcfirma_perpet)
  
}
function present(){
  let fcfirma_present1 = fcfirma_ano1/(1+0.1)^1
  let fcfirma_present2 = fcfirma_ano2/(1+0.1)^2
  let fcfirma_present3 = fcfirma_ano3/(1+0.1)^3
  let fcfirma_present_perpet = fcfirma_perpet/(1+0.1)^3
  let fcd_da_firma = fcfirma_present1 + fcfirma_present2 + fcfirma_present3 + fcfirma_present_perpet

  let fcfirma_present_result_1 = document.getElementById("presente-value-1")
  let fcfirma_present_result_2 = document.getElementById("presente-value-2")
  let fcfirma_present_result_3 = document.getElementById("presente-value-3")
  let fcfirma_present_result_4 = document.getElementById("presente-value-4")

  fcfirma_present_result_1.innerHTML = parseInt(fcfirma_present_ano1)
  fcfirma_present_result_2.innerHTML = parseInt(fcfirma_present_ano2)
  fcfirma_present_result_3.innerHTML = parseInt(fcfirma_present_ano3)
  fcfirma_present_result_4.innerHTML = parseInt(fcfirma_present_perpet)
}
function conclusion(){
  let valordafirma = fcd_da_firma
  let acionistavalue = valordafirma - (debt/1000)
  let fairprice = acionistavalue/stocksquantity
  let upside = ((fairprice-stock)-1)
  if(fairprice>stock){
    alert("Ação está descontada")
  }else{
    alert("Ação está cara")
  }
}
function calcs(){
  ropliqcalc()
  nopatcalc()
  capexcalc()
  varncgcalc()
  deprecalc()
  fcdfirmacalc()
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