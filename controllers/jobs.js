const { default: axios } = require('axios');
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');
const save_job = require('../models/save_job');

//// ROUTES TO SEARCH FOR JOBS AND SHOW A SPECIFIC ONE

// GET /users/job-board - return a page with saved jobs

router.get('/results', async (req, res) => {
    // console.log(req.query, "testing")
    axios.get(`https://www.themuse.com/api/public/jobs?category=${req.query.jobInput}&page=2`)
        .then (response => {
            console.log(req.query)
            // console.log('testing', response.data)
            res.render('./jobs/results.ejs', {jobs:response.data.results})
            // res.send(response.data)
        })
        .catch(console.log)
})



// POST -- receiving the name of a job and adding it to the database
router.post('/', async (req, res) => { 
    try {
        //find or create a job in the db
        await db.save_job.findOrCreate({
        where: {
            positionName: req.body.positionName,
            jobLink: req.body.jobLink,
            company: req.body.company,
            location: req.body.location,
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

// GET /jobs/info/:id - display a specific job in detail


router.get('/info/:id', (req, res) => {
    // console.log(req.params.id, "testing id")
    axios.get(`https://www.themuse.com/api/public/jobs/${req.params.id}`)
    .then (response => {
        res.render('jobs/info.ejs', {jobs:response.data})
    })
    .catch(console.log)
})





// POST /

module.exports = router;