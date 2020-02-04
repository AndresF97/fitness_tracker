const monogoose = require("mongoose")

const Schema = monogoose.Schema;



const WorkoutSchema = new Schema({
    date:{ 
    type:Date,
    default:Date.new,
    },
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
        distance:{
            type:Number
        }
    },
]
})

const Workout = monogoose.model("Workout",WorkoutSchema);

module.exports = Workout;