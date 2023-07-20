
const express = require("express")
const router = express.Router()

router.get("/:num", (req, res) => {
    const {num} = req.params
    if(Number.isInteger(+num)){
        const product = +num * 3
        res.status(200).json(`${num} * 3 is ${product}`)
    }
    else {
        res.status(500).json({
            error: "Value must be an intger"
        })
    }
})



module.exports = router