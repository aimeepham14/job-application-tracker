# Job Application Tracker

## Description
A job application tracker to maintain, organize, and manage the jobs that you apply for through LinkedIn. Let's us help you get organized so you can get hired for your next dream job. 

## Installment Instructions
I will be planning to use LinkedIn's API to pull in their job posts database.

## Tech Used
Bootstrap 5

## Wireframes
#### Login Page
![imgur, login page](https://i.imgur.com/85NM32h.png)
#### New Account Page
![imgur, new account page](https://i.imgur.com/ZDvleec.png)
#### Dashboard Home Page
![imgur, dashboard home page](https://i.imgur.com/6GvzE4i.png)
#### Viewing 1 Job Post Page
![imgur, 1 job post page](https://i.imgur.com/967m3KE.png)

## ERDs
![imgur, ERD](https://i.imgur.com/NEOBmOF.png)
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
