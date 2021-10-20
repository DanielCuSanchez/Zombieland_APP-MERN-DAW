const express = require("express")
const { postOneInfection, getAllInfections } = require("../models/Infection")

const router = express.Router()

router.get("/", (req, res) => {
  getAllInfections()
    .then(({ rows, rowCount }) => {
      res.status(200).json({
        infections: rows,
        count: rowCount
      })
    })
    .catch(e => {
      console.log(e, "POST ZOMBIE")
      res.json(500).json({
        msg: "error"
      })
    })
})

router.post("/", (req, res) => {

  postOneInfection(req.body)
    .then(({ rows, rowCount }) => {
      console.log(rowCount)
      res.status(200).json({
        msg: "post infection"
      })
    })
    .catch(e => {
      console.log(e, "POST ZOMBIE")
      res.json(500).json({
        msg: "error"
      })
    })
})

module.exports = router