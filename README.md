# Job Application Board

## Description
Bored and overwhelmed applying for jobs? Don't be bored, get access to all of our boards to keep track of everything during the job searching process. This application will keep track of all of your jobs that you are interested in applying to and jobs that you have currently applied to in one spot. Update with your own notes during the entire interview process all in one place.

## Installment Instructions
Using The Muse's API key.

## Wireframes
#### Login Page
![imgur, login page](https://i.imgur.com/85NM32h.png)
#### New Account Page
![imgur, new account page](https://i.imgur.com/ZDvleec.png)
#### Search for a job board
![imgur, search for job page](https://i.imgur.com/rXhmhPx.png)
#### Form page to add to applied board
![imgur, user form to applied jobs board](https://i.imgur.com/DaQ9GTV.png)
#### Jobs that user has applied for board
![imgur, user applied job board](https://i.imgur.com/3TcMfd6.png)
#### Jobs that user is currently tracking
![imgur, user board for jobs that are currently tracking](https://i.imgur.com/uZlX9PR.png)

## ERDs
![imgur, ERD](https://i.imgur.com/1O6YsfR.png)
## RESTful Routes
#### User
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /users  | A form for creating a new user  |
| POST   | /users/new  | A new user is created  |
| PUT    | /users/:id  | Edit the user  |
| DELETE | /users/:id  | Deleting a user  |

#### Job Board
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /jobs  | Shows all jobs  |
| GET    | /jobs/:id  | Show one job  |
| PUT    | /users/:id | Edit a job  |
| DELETE | /users/:id  | Deleting a job  |

#### Applied Job Board
| Method | Action | Description|
|:------:|:------:|:----------:|
| GET    | /applied  | Shows all applied jobs  |
| POST   | /applied/new  |  A new applied job is added   |
| PUT    | /applied/:id | Edit an applied job  |
| DELETE | /applied/:id  | Deleting an applied job  |


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
