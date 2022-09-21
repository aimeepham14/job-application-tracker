let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');

//GET -- getting details to one job from the job board

router.get('/:id', async (req, res) => {
    // console.log('testing again2')
   try {
    const details = await db.save_job.findOne()
    res.render('saved-jobs-details.ejs', {details: details})
   } catch (err) {
        console.log(err)
        res.send('server error')
    }
});


//POST -- route to save note to db
router.post('/:id', async (req, res) => {
    // console.log('testing this route')
    // console.log(req.body)
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
            // saveJobId: req.body.saveJobId
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