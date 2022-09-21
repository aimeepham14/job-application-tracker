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


//////NEW ROUTE ADDED
// router.get('/:id', async (req, res) => {
//     try {
//         const allNote = await db.save_job.findAll()
//         res.render('saved-jobs-details.ejs', { allNote: allNote })
//     } catch(err) {
//         console.log(err)
//         res.send('server error')
//     }
// });

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



// router.post('/:id', async (req, res) => {
//     // console.log('hello from here')
//     // res.send(job_note)
//     try {
//         console.log(req.body)
//         await db.job_note.create({
//             note: req.body.note,
//             date: req.body.date
//         })
//         res.redirect(`/users/job-board/${req.body.id}`)
//     } catch(err) {
//         console.log(err)
//         res.send('server error')
//     }
// })



module.exports = router