const express = require("express")
const { getAllStates } = require("../models/State")

const router = express.Router()

router.get("/", (req, res) => {
  getAllStates()
    .then(({ rows, rowCount }) => {
      res.status(200).json({
        states: rows,
        count: rowCount
      })
    })
    .catch(e => {
      console.log(e)
      res.status(500).json("error")
    })
})

module.exports = router