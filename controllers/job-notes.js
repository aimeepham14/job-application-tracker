let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');
const methodOverride = require("method-override");
router.use(methodOverride("_method"))

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


router.post('/:id/notes', async (req, res) => {     console.log('hello again again', req.params)

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
})

// GET -- to edit a note
router.get('/edit/:id', async (req, res) => {
    try{
        // console.log(req.params.id)
        const note = await db.job_note.findOne({
            where: {
               id: req.params.id
            }
        })
        .then((note) => {
            res.render('edit.ejs', {
                note: note,
                id: req.params.id
            })
        })
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});


//PUT -- posting the edits
router.put('/:id', async (req, res) => {
    try{
        const changeNote = await db.job_note.update({
            note: req.body.note,
            date: req.body.date,
            saveJobId: req.body.saveJobId
        }, { where: {
            id: req.params.id
        }})
        res.redirect(`/job-notes/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
})


//DELETE -- deleting job from Job Board

router.delete('/:id', async (req,res) => {
    db.job_note.destroy({
     where: { id: req.params.id}
    })
    .then( () => {
     res.redirect(`/job-notes/${req.params.id}`)
    })
    .catch(console.log)
 })





module.exports = router