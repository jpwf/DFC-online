const sendresults = document.getElementById("send-info")

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
    window.location = "/fcd-results"
    //var margem_nopat = parseInt((nopat.value/ropliq.value)/100)
   
    
    //
    //NOPAT
    // const nopat_1 = nopat.value * (1 + margem_nopat)
    // const nopat_2 = nopat_1.value * (1 + margem_nopat)
    // const nopat_3 = nopat_2.value * (1 + margem_nopat)
    // const nopat_Perpet = nopat_3.value * (1 + margem_nopat)
  }else{
    alert("Preencha todos os campos")
    setTimeout(() =>{
      // window.reload()
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





//métricas
const perpetuidade = 0.01;
const desconto_buffet = 0.1;

const desconto_taxa_juros = 0;
//
//Receita operacional Líquida

//

