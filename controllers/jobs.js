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
    axios.get(`https://www.themuse.com/api/public/jobs?category=${req.query.categories}&page=2`)
        .then (response => {
            // console.log('testing', response.data)
            res.render('jobs/results.ejs', {jobs:response.data})
        })
        .catch(console.log)
})
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

// DELETE FROM SAVED JOBS
router.delete('/:id', (req,res) => {
    db.save_job.destroy({
        where: {id: req.params.id}
    })
    .then( () => {
        res.redirect('/users/job-board')
    })
})

  



// POST /

module.exports = router;