const { Router } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models')

// GET /job-board - return a page with saved jobs

router.get('/', async (req, res) => {
    try {
        const saved = await db.save_job.findAll()
        //rendering them on job board page
        // res.send('saved jobs here')
        res.render('saved-jobs.ejs', { saved: saved })
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});

// POST /job-board - receive the name of the saved job and add it to the database

router.post('/', async (req, res) => { 
    try {
        console.log(req.body)
        //find or create a job in the db
        // await db.save_job.findOrCreate({
        // where: {
        //     positionName: req.body
        //     // jobLink: req.body.results.refs.landing_page,
        //     // company: req.body.company.name,
        //     // location: req.body.locations.name,
        //     // dateAdded: date,
        // }
        // })
        //redirect to favorites
        res.send(req.body)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});


module.exports = router;