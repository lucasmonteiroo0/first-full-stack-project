const express =  require("express");
const app = express()
const rotaLivro = require("./routes/livro")

app.use('livros', rotaLivro)
app.use(express.json())

const port = 8000

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})