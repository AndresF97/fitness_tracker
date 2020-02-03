const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

const PORT = process.env.PORT || 3000;

//const User = require("./useModel.js");


const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app,path);
require("./routes/apiRoutes.js")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb",{ useNewUrlParser: true });





app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})