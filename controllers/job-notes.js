let express = require('express')
const { Model } = require('sequelize')
let db = require('../models')
let router = express.Router()
const crypto = require('crypto-js')
const bcrypt=require('bcrypt')

// ROUTES TO ADD AND EDIT A NOTE

router.get('/notes', (req,res) => {
    res.render('job-notes/user-notes.ejs')
})

// POST /notes -- creates a new note

router.post('/', async (req, res) => {
    try{
        //create a new note
        const newNote = await db.job_note.create
        ({
            note: req.body.note
        }) 
        console.log(req.body)
    }catch(error) {
        console.log(error)
        res.send('server error')
    }
})



module.exports = router