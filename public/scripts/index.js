const sendresults = document.getElementById("send-info")

const debt = document.getElementById("debt")
const stocksquantity = document.getElementById("stocks-quantity")
const ropliq = document.getElementById("R-OP-LIQ") 
const nopat = document.getElementById("NOPAT")
const capex = document.getElementById("CAPEX")
const varncg = document.getElementById("VAR-NCG")
const depreciation = document.getElementById("depreciation")
const fcfirma = document.getElementById("fc-firma")

// var ropliqvalue = ropliq.value

sendresults.addEventListener("click", () => {
  if(debt.value !=0 & stocksquantity.value !=0 & ropliq.value !=0 & nopat.value != 0 & capex.value != 0 & varncg.value != 0 & depreciation.value != 0 & fcfirma.value != 0){
    window.location = "/fcd-results"
   
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





//métricas
// const perpetuidade = 0.01;
// const desconto_buffet = 0.1;

// const desconto_taxa_juros = 0;
//
//Receita operacional Líquida

//

export { ropliq  };