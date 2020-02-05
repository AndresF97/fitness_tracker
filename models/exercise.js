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
        weight:Number,
        reps:Number,
        sets:Number,
        distance:Number
    },
]
})

const exercises = monogoose.model("exercises",exercisesSchema);

module.exports = exercises;