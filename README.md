# Fitness Tracker

## Site Picture
![fitness](https://media-exp1.licdn.com/dms/image/C4E22AQEuNDBVyKcS7Q/feedshare-shrink_800/0?e=1583971200&v=beta&t=6Paz5qvtZZr32Sj839Eliudxe620dPyHRNe5Pe8CQNY)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Javascript - used to set actions
- Express - to set up routes
- chart.js - charts is used to measured data and used to display clean data
- mongoose - Is use to set up the connection between Mongodb and javascript
- morgan - displays what CRUD routes are accesed and hwat action were taken in those routes

## Summary 
This website allows you to keep up with your daily execises.

## Code Snippet
``script
<script>
  app.get("/api/workouts",function(req,res){
        db.Workout.find({})
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    //post routes to make workouts
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
    //Get routs to get the info from the table
    app.get("api/works/stats",function(req,res){
        db.exercises.find({})
        .then(function(result){
            res.json(result)
        })
        .catch(function(error){
            res.json(error)
        })
    })
    </script>
```
-These are the apoi routes that used to server and get data
## Author Links
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)