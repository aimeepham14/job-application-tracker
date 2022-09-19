let express = require('express');
const { Model } = require('sequelize');
let db = require('../models');
let router = express.Router();
const crypto = require('crypto-js');
const bcrypt=require('bcrypt');
const job_note = require('../models/job_note');

//GET -- adding a route to take user to note form

router.get('/', (req, res) => {
    res.render('job-notes/user-notes.ejs')
})



module.exports = router