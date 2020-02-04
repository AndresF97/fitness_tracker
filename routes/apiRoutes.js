//setting up the connection to the database
var db = require("../models/index.js")

//exporting the api routes 
module.exports = function(app){
    app.get("/api/workouts",function(req,res){
        db.Workout.find({})
        .then(function(result){
            console.log(result[0].exercises)
            res.json(result)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    app.post("/api/workouts/",function({body},res){
        db.Workout.create(body)
        .then((result)=>{
            console.log(result)
            res.json(result)
        })
        .catch((error)=>{
            res.json(error)
        })
        
    })
}

