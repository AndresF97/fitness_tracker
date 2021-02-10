const monogoose = require("mongoose")

const Schema = monogoose.Schema;



const WorkoutSchema = new Schema({
    date:{ 
        type: Date,
        default:Date.now,
    },
    exercises:[
        {
        type: {
            type:String,
            trim:true,
            required:"Enter exercise"
        },
        name:{
            type:String,
            trim:true,
            require:"Add a name to your exercise"
        },
        duration:{
            type:Number,
            required:"Enter exercise duration"
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
    }
]
});

const Workout = monogoose.model("Workout",WorkoutSchema);

module.exports = Workout;