let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');

//GET -- getting details to one job from the job board

router.get('/:id', async (req, res) => {
    console.log('testing hello',req.params.id)
   try {
    const details = await db.save_job.findOne()
    const newNote = await db.job_note.findAll({
        where: {saveJobId: req.params.id }
    })
    // console.log(newNote)
    res.render('saved-jobs-details.ejs', {
        details: details,
        note: newNote
    })
   } catch (err) {
        console.log(err)
        res.send('server error')
    }
});



//POST -- route to save note to db
router.post('/:id', async (req, res) => {
    // console.log('testing this route')
    console.log('hello again again', req.body)
    try{
        const newNote = await db.job_note.create({
            note: req.body.note,
            date: req.body.date,
            saveJobId: req.body.saveJobId
        })
        // res.send(newNote)
        res.redirect(`/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
});


router.post('/:id/notes', async (req, res) => { 

    try{
        await db.job_note.findOrCreate({
        where: {
            note: req.body.note,
            date: req.body.date,
            saveJobId: req.params.id
        }
        })
        res.redirect(`/job-notes/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});

router.put('/:id', (req, res) => {
    db.job_note.update({
        note: req.body.note,
        date: req.body.date,

    },
    {
        where: {id: req.params.id}
    })
    db.job_note.findOne({
        where: { id: req.params.id}
    })
    .then(note => {
        res.redirect(`/job-notes/${job_note.saveJobId}`)
    })
})







module.exports = router