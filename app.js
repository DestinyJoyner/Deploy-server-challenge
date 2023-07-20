const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/multByThree", require("./controllers/MultiplyByThree.js"))

app.get("/", (req, res) => {
    res.status(200).json("Deploy Server Challenge")
})
app.get("/greet", (req,res) => {
    res.status(200).json("hello")
})

module.exports= app