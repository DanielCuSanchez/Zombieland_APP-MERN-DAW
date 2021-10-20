const express = require("express")
const cors = require("cors")
const morgan = require("morgan")


const app = express()

const PORT = 4000 || process.env.PORT

app.use(cors()) // Una configuracion de seguridad entre headers
app.use(express.json())
app.use(morgan("dev"))



app.use("/infections", require("./controllers/infections.controller"))
app.use("/states", require("./controllers/states.controller"))


app.get('/', (req, res) => {
  console.log('Esto es una prueba')
  res.json({ menssge: 'Bien 😀' })
})


module.exports = { app, PORT }