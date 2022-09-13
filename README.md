# Job Application Board

## Description
Bored and overwhelmed applying for jobs? Don't be bored and apply for your own job board. This application will keep track of all of your applied jobs in one spot. Update your personal job board with all of the jobs that you are currently applying for and update with notes and reminders as you move along the interview process.

## Installment Instructions
Using The Muse's API key.

## Wireframes
#### Login Page
![imgur, login page](https://i.imgur.com/85NM32h.png)
#### New Account Page
![imgur, new account page](https://i.imgur.com/ZDvleec.png)
#### Dashboard Search Job Page
![imgur, dashboard home page](https://i.imgur.com/STnwVsS.png)
#### User's Job Board
![imgur, user job board](https://i.imgur.com/igDLeS4.png)
#### Adding a job to your Job Board
![imgur, user job board](https://i.imgur.com/nEIWlTJ.png)

## ERDs
![imgur, ERD](https://i.imgur.com/AEXaGXL.png)
## RESTful Routes
#### User
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /users  | A form for creating a new user  |
| POST   | /users/new  | A new user is created  |
| PUT    | /users/:id  | Edit the user  |
| DELETE | /users/:id  | Deleting a user  |

#### Job Posts
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /users/:id/jobs  | Shows all jobs  |
| POST   | /users/:id/jobs/new  | Create a new job  |
| PUT    | /users/:id/jobs/:id | Edit a job  |
| DELETE | /users/:id/jobs/:id  | Deleting a job  |

## MVP Goals
* Have all of the models successfully set
* Successfully integrate the API
* Have all routes fully functional
* Have all job postings display correctly
* A well styled app

## Stretch Goals
* Implement a calendar or a countdown til interview date
* Allow user to upload their resume
