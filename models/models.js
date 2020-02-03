const monogoose = require("mongoose")

const Schema = monogoose.Schema;



const workoutSchema = new Schema({
    date: Date,
    exercises:[
        {
        type: String,
        name:String,
        duration:{
            type:Number
        },
        distance:{
            type:Number
        }
    },
]
})

const workOut = monogoose.model("workout",workoutSchema);

module.exports = workOut;