let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');


router.post('/job-board/:id', async (req, res) => {
    // console.log('hello from here')
    // res.send(job_note)
    try {
        // console.log(req.body)
        await db.job_note.create({
            note: req.body.note,
            date: req.body.date
        })
        res.redirect(`/users/job-board/${req.body.id}`)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
})



module.exports = router