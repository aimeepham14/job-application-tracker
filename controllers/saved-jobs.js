const { default: axios } = require('axios');
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');
const save_job = require('../models/save_job');

// GET /users/job-board - return a page with saved jobs

router.get('/', async (req, res) => {
    try {
        const saved = await db.save_job.findAll()
        //rendering them on job board page
        // res.send('saved jobs here')
        // res.send(saved)
        res.render('saved-jobs.ejs', { saved: saved })
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});

// POST /users/job-board - receive the name of the saved job and add it to the database

router.post('/', async (req, res) => { 
    try {
        //find or create a job in the db
        await db.save_job.findOrCreate({
        where: {
            positionName: req.body.name,
            jobLink: req.body.link,
            company: req.body.company,
            location: req.body.locations
        }
        })
        //redirect to job board
        res.redirect('/users/job-board')
        // res.send(req.body)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});

// GET /job-board/:id - display a specific job in detail to make notes

router.get('/:id', async (req, res) => {
    try {
        const oneJob = await db.save_job.findOne({
            where: { id: req.params.id }
        })
        // console.log('testing')
        res.render('job-details.ejs', {saved: oneJob})
    }catch(err) {
        console.log(err)
    }
});





// POST /

module.exports = router;