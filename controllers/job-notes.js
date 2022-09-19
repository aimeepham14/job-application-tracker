let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');

//POST -- creating a new note

router.get('/job-board/:id', async (req, res) => {
    try {
        console.log(req.body)
        await db.job_note.note({
            note: req.body.note
        })
        res.redirect(`/users/job-board/${req.body.id}`)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
})



module.exports = router