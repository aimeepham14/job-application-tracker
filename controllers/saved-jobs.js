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
        //find or create a job in the db
        await db.save_job.findOrCreate({
        where: {
            positionName: req.body.name
            // jobLink: req.body.link,
            // company: req.body.company,
            // location: req.body.location
            
        // where: {
        //     name: req.body.name
        //     // link: req.body.refs.landing_page,
            // company: req.body.company.name,
            // locations: req.body.locations[0].name,
        }
        })
        //redirect to favorites
        res.redirect('/')
        // res.send(req.body)
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});


module.exports = router;