let express = require('express')
const { Model } = require('sequelize')
let db = require('../models')
let router = express.Router()

//POST /notes - create a new note
// router.post('/:id', async (req, res) => {
//     try {
//         console.log(req.body)
//     } catch(error) {
//         console.warn(error)
//         res.status(400).render('main/404')
//     }
// })

module.exports = router