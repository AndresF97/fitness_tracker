const monogoose = require("mongoose")

const Schema = monogoose.Schema;



const exercisesSchema = new Schema({
    exercises:[
        {
        type: String,
        name:String,
        trim:true,
        duration:{
            type:Number
        },
        weight:{
            type:Number
        },
        reps:{
            type:Number
        },
        sets:{
            type:Number
        },
        distance:{
            type:Number
        }
    },
]
})

const exercises = monogoose.model("exercises",exercisesSchema);

module.exports = exercises;