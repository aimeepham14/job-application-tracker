const { Router } = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models')

// GET /users/profile/job-board - return a page with saved jobs

router.get('/', async (req, res) => {
    try {
        const saved = await db.save_job.findAll()
        //rendering them on job board page
        res.send('saved jobs here')
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
});


module.exports = router;