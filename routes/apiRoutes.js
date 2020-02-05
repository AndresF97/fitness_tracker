//setting up the connection to the database
var db = require("../models/index.js")

//exporting the api routes 
module.exports = function(app){
    //shows all of the workouts as objects
    app.get("/api/workouts",function(req,res){
        db.Workout.find({})
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    app.get("/api/workouts",function(req,res){
        db.exercises.find({})
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    app.post("/api/workouts",function({body},res){
        console.log(body)
        db.Workout.create(body)
        .then((result)=>{
            //console.log(res.json(result))
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
    // app.post("api/works/exercise?id",function({body},res){
    //     var chosen = req.params
    // })
}

