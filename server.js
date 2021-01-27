const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");
const db = require("./models/index.js")
const PORT = process.env.PORT || 3000;

console.log(db.Workout)

const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
//Routes to get and set information
require("./routes/htmlRoutes.js")(app,path);
//future route to get and send infromaiton from 
require("./routes/apiRoutes.js")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout",{ useNewUrlParser: true });

//setting upp seeds to populate the db



app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})