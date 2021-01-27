const monogoose = require("mongoose")

const Schema = monogoose.Schema;



const WorkoutSchema = new Schema({
    date:{ 
    type: Date,
    default:Date.now,
    },
    exercises:[
        {
        type:Schema.Types.ObjectId,
        ref:"exercises"
    }
]
})

const Workout = monogoose.model("Workout",WorkoutSchema);

module.exports = Workout;