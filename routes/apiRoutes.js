//setting up the connection to the database
var db = require("../models/index.js")

//exporting the api routes 
module.exports = function(app){
    //Get routes
    app.get("/api/workouts",function(req,res){
        db.Workout.find()
        .then(result =>{
            res.json(result)
            console.log(result[0].exercises)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    // //post routes to make workouts
    app.post("/api/workouts",function({body},res){
        console.log(body)
        db.exercises.create(body)
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            res.json(error)
        })
        
    })
    app.put("/api/workouts/:id",function({body},res){
        console.log(body)
        db.Workout.findOneAndUpdate({_id:body})
        .then(function (result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    // //Get routs to get the info from the table
    // app.get("api/works/stats",function(req,res){
    //     db.exercises.find({})
    //     .then(function(result){
    //         res.json(result)
    //     })
    //     .catch(function(error){
    //         res.json(error)
    //     })
    // })
}

