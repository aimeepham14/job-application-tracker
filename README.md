# Job Application Board

## Description
Bored and overwhelmed applying for jobs? Don't be bored, get access to all of our boards to keep track of everything during the job searching process. This application will keep track of all of your jobs that you are interested in applying to and jobs that you have currently applied to in one spot. Update with your own notes during the entire interview process all in one place.

## Deployed Link
* [Deployment Link](https://project-2-job-app-aimeepham14.koyeb.app/)

## Installment Instructions
* Fork and clone this repo to your local repo
* Run `npm init -y` to initialize npm
* Open the repo and go to the `package.json` file and see a list of npm packages under `dependencies` 
* Run `npm install` or `npm i` in the terminal to download all required npm packages. 
* Touch a `.gitignore` file and add `node_modules` and `.env` before committing to remote repo
* Run `sequelize db:create` to creat the database in psql
* Run `sequelize db:migrate` to migrate the models

## Techstack
* JavaScript
* Node
* Express
* Axios
* Sequelize
* EJS
* Express-EJS-Layouts
* PostgreSQL
* HTML
* CSS
* Bcrypt

## Wireframes
#### Login Page
![imgur, login page](https://i.imgur.com/85NM32h.png)
#### New Account Page
![imgur, new account page](https://i.imgur.com/ZDvleec.png)
#### Search for a job board
![imgur, search for job page](https://i.imgur.com/rXhmhPx.png)
#### Details about job to add to applied board
![imgur, details to add to applied jobs board](https://i.imgur.com/tyyB6yO.png)
#### User's Job Board
![imgur, Job Board](https://i.imgur.com/yJFi379.png)
#### Details about a job that a user is tracking to add a note
![imgur, user board for jobs that are currently tracking](https://i.imgur.com/qplCFxI.png)

## ERDs
![imgur, ERD](https://i.imgur.com/0C1mgth.png)
## RESTful Routes
#### User
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /users/new  | A form for creating a new user  |
| POST   | /users  |   | Adding a new user to the database |
| GET   | /users/login  | Show a login form to the user   |
| GET   | /users/profile  | Show user's profile   |
| GET | /users/job-board  | Display all of user's saved jobs  |
| DELETE | /users/job-board/:id  | Deleting a job from the job board  |

#### Jobs
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /jobs/results  | Shows all jobs  |
| POST    | /jobs/ | Receiving a job and adding it to the database  |
| GET    | /jobs/info/:id | Displaying a specific job  |

#### Job Notes
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /job-notes/:id  | Getting details about a specific job from job board  |
| POST   | /job-notes/:id  |  Route to save note to database   |
| POST    | /job-notes/:id/notes | Route to add note to page  |


## User Stories
* As a user I want to be able search for jobs available through The Muse and click into the job posting link to apply
* As a user I want to be able to add a job that I am interested in applying to to my job board
* As a user I want to be able to move a job from my job board to my applied board after I have applied to the job
* As a user I want to be able to update, edit, and add any notes my applied board as I move through the interview process

## MVP Goals
* Have all of the models successfully set
* Successfully integrate the API
* Have all routes fully functional
* Have all job postings display correctly
* A well styled app

## Stretch Goals
* Implement a calendar or a countdown til interview date
* Allow user to upload their resume
