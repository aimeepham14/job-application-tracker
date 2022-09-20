const express = require('express')
const router = express.Router()
const db = require('../models')
const crypto = require('crypto-js')
const bcrypt = require('bcrypt')
const methodOverride = require("method-override")
router.use(methodOverride("_method"))
const { default: axios } = require('axios');


// GET /users/new -- render a form to create a new user
router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

// POST /users -- create a new user in the db
router.post('/', async (req, res) => {
    try {
        // has the password from the req.body
        const hashedPassword = bcrypt.hashSync(req.body.password, 12)        
        // create a new user
        const [newUser, created] = await db.user.findOrCreate({
            where: {
                email: req.body.email
            }, 
            defaults: {
                password: hashedPassword
            }
        })

        // if the user was found...send them to the login form
        console.log('created is:',  created)
        if (!created) {
            console.log('user exists already')
            res.redirect('/users/login?message=Please log into your account to continue.')
        } else {
            // store that new user's id as a cookie in the browser
            const encryptedUserId = crypto.AES.encrypt(newUser.id.toString(), process.env.ENC_SECRET)
            const encryptedUserIdString = encryptedUserId.toString()
            res.cookie('userId', encryptedUserIdString)
            // redirect to the homepage
            res.redirect('/users/profile')
        }

    } catch(err) {
        console.log(err)
        res.send('server error')
    }
})

//http://127.0.0.1:3000/users/login?message=Incorrect%20username%20or%20password
// GET /users/login -- show a login form to the user
router.get('/login', (req, res) => {
    console.log(req.query)
    res.render('users/login.ejs', {
        // if the req.query.message exists, pass it is as the message, otherwise pass in null
        // ternary operator
        // condition ? expression if truthy : expression if falsy
        message: req.query.message ? req.query.message : null
    })
})

// POST /users/login -- accept a payload of form data and use it log a user in 
router.post('/login', async (req, res) => {
    try {
        // look up the user in the db using the supplied email
        const user = await db.user.findOne({ 
            where: {
                email: req.body.email
            } 
        })
        const noLoginMessage = 'Incorrect username or password'
console.log(req.body.password)

        // if the user is not found -- send the user back to the login form
        if (!user) {
            console.log('user not found')
            res.redirect('/users/login?message=' + noLoginMessage)
        // if the user is found but has given the wrong password -- send them back to the login form
        } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            console.log('wrong password')
            res.redirect('/users/login?message=' + noLoginMessage)
        // if the user is found and the supplied password matches what is in the database -- log them in
        } else {
            const encryptedUserId = crypto.AES.encrypt(user.id.toString(), process.env.ENC_SECRET)
            const encryptedUserIdString = encryptedUserId.toString()
            res.cookie('userId', encryptedUserIdString)
            res.redirect('/users/profile')
        }
    } catch(err) {
        console.log(err)
        res.send('server error')
    }
})

// GET /users/logout -- log out a user by clearing the stored cookie
router.get('/logout', (req, res) => {
    // clear the cookie
    res.clearCookie('userId')
    // redirect to the homepage
    res.redirect('/')
})

router.get('/profile', (req, res) => {
    // if the user is not logged ... we need to redirect to the login form
    if (!res.locals.user) {
        res.redirect('/users/login?message=You must authenticate before you are authorized to view this resource.')
    // otherwise, show them their profile
    } else {
        res.render('users/profile.ejs', {
            user: res.locals.user
        })
    }
})

//GET /job-board -- displays all of the user's saved jobs

router.get('/job-board', async (req, res) => {
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

//DELETE -- deleting job from Job Board

router.delete('/job-board/:id', async (req,res) => {
    db.save_job.destroy({
     where: { id: req.params.id}
    })
    .then( () => {
     res.redirect('/users/job-board')
    })
    .catch(console.log)
 })

//GET -- getting details to one job from the job board

router.get('/job-board/:id', async (req, res) => {
    console.log('testing again2')
   try {
    const details = await db.save_job.findOne()
    res.render('saved-jobs-details.ejs', {details: details})
   } catch (err) {
        console.log(err)
        res.send('server error')
    }
});

//POST -- route to save note to db
router.post('/job-board/:id/notes', async (req, res) => {
    // console.log('testing this route')
    console.log(req.body)
    try{
        const newNote = await db.job_note.create({
            note: req.body.note,
            date: req.body.date
        })
        // res.send(newNote)
        res.redirect(`/job-board/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})




router.use('/jobs', require('./jobs'))



module.exports = router