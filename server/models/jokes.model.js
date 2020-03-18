const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup for the joke is required"],
        minlength: [10, "setup must be atleast 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is the best part. It's obviously required"],
        minlength: [3, "punchline must be atleast 3 characters long"]
    }
},
{timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;