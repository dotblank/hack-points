# Hack Points

### MVP:
A bounty system where users can create and complete tasks to win points.
All users' points are added together to make up the Groups total points.


### Project setup:
* Download mongodb 
* start `mongod --dbpath=<path to data>`
* navigate to project root and run `npm install` to install dependencies
* create a `.env` to store environmental variables:
> GITHUB_KEY=
GITHUB_SECRET=
SLACK_KEY=
SLACK_SECRET=
MONGO_URI=mongodb://localhost:27017/clementinejs
PORT=8080
APP_URL=http://localhost:8080/

* run `npm start` to spin up the webserver


To work with the view, navigate to the "client" directory and run `npm install`
The view is running ReactJS and will need to be processed before use in the main project.  Running `npm run deploy` will process move the ReactJS files to the" "public/" folder of the main project.


### TODO:
    Create key based api on /api/users/ and /api/bounties/
    Create workflow for creation/approval/completion of a bounty
    Create view for bounties
    Update manifest.json
    
### Scheme 
    user{
        points:Number,
        role:String,  // Admin, Approver, User, etc...
        slack:{userInfo},
        badges:{}
    }

    bounty{
        isComplete:Bool,
        isApproved:Bool,
        completedBy:String,
       
        title:String
        messageString,
        pointValue:Number
    }


### Flow:
    A user creates a bounty.
    Someone with delegated access approves bounty and assigns a point value
    other user completes the bounty
    The bounty author then awards points to the user who completed the bounty

### Feature Goals:
    Leaderboard
    Total Points for the entire group is visible at all times.
    The group can set goals for when a milestone is reached

### Future Features:
    request training buttons
    badges -- e.g. qualified laser user
   
