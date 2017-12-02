## Hack Points

# MVP:
A bounty system where users can create and complete tasks to win points.
All users' points are added together to make up the Groups total points.

# TODO:
    Declare slack in userInfo Schema
    Create express routes for subdirectories that match the clientside routing
    Create key based api on /api/users/ and /api/bounties/
    Create workflow for creation/approval/completion of a bounty
    Update manifest.json
    
# Scheme 
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


# Flow:
    A user creates a bounty.
    Someone with delegated access approves bounty and assigns a point value
    other user completes the bounty
    The bounty author then awards points to the user who completed the bounty

# Feature Goals:
    Leaderboard
    Total Points for the entire group is visible at all times.
    The group can set goals for when a milestone is reached

# future features:
    request training buttons
    badges -- e.g. qualified laser user
   
