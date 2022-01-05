const express = require("express")
const app = express()

app.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/pages", {
    express: app,
    noCache: true
})

app.get("/", (req, res) =>{
  return res.render("index.html")
})

const port = 2000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})